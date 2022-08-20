import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SlideProps {
  title: string;
  image: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

interface StyledProps {
  image?: string;
  active?: boolean;
  [x: string]: unknown;
}

const StyledSlide = styled.div`
  min-width: 100%;

  overflow: hidden;

  transform: scale(${(props: StyledProps) => (props.active ? '1' : '0.85')});
  opacity: ${(props: StyledProps) => (props.active ? '1' : '0.5')};
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  min-width: 100%;
  height: 800px;
  max-height: 80vh;
  padding: 0.5rem /* 8px */;

  border-radius: 1rem /* 16px */;
  border-width: 1px;

  color: white;

  background: rgb(48, 31, 9);
  background-image: linear-gradient(
      90deg,
      rgba(48, 31, 9, 0.75) 0%,
      rgba(222, 199, 154, 0.1) 100%
    ),
    url(${(props: StyledProps) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export function Slide({
  active = true,
  title,
  children,
  image,
  onClick,
}: SlideProps) {
  const slideRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // to make sure the animation is only run once on first render
  const [firstRender, setFirstRender] = useState(true);

  // animate the slide in
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut' },
    });

    // scale the slide to full size if it's active
    tl.to(slideRef.current, {
      scale: active ? 1 : 0.85,

      // if delay is zero, the animation won't run when navigate through the slides
      // and it must be 0 at the first render to remove delay of the animation
      delay: firstRender ? -1 : 0,
    });

    // we need to animate the slides on the first render only
    // to make sure they're all in the right position
    if (!firstRender) return;
    setFirstRender(false);

    // for the active slide, animate the title and content in
    if (
      active &&
      slideRef.current &&
      titleRef.current &&
      containerRef.current
    ) {
      tl.from(slideRef.current, {
        height: 0,
        opacity: 0,
        scale: 0.85,
      })

        // show the content container
        .fromTo(
          containerRef.current,
          {
            opacity: 0,
            y: 30,
            height: 0,
            ease: 'power2.inOut',
          },
          { opacity: 1, y: 0, height: 'auto' },
          '-=1'
        )

        // show the title
        .fromTo(
          HTMLCollectionToArray(titleRef.current?.children),
          {
            opacity: 0,
            yPercent: 100,
          },
          {
            opacity: 1,
            yPercent: 0,
          },
          '-=0.5'
        )

        .from(
          HTMLCollectionToArray(containerRef.current?.children),
          {
            opacity: 0,
            duration: 1.5,
          },
          '-=1'
        );
    } else {
      tl.fromTo(
        slideRef.current,
        {
          opacity: 0,
          delay: -1,
          scale: 0.5,
        },
        {
          opacity: 1,
          delay: 1,
          scale: 0.85,
        }
      );
    }
  }, [active, firstRender]);

  return (
    <StyledSlide active={active} ref={slideRef} onClick={onClick && onClick}>
      <SlideContainer image={image} className={`sm:p-4 md:p-16`}>
        <div
          className="cursor-pointer overflow-hidden text-5xl sm:text-6xl md:w-4/5 md:text-7xl lg:w-2/3 xl:w-1/2"
          ref={titleRef}
        >
          <h1>{title}</h1>
        </div>
        <div
          className="mt-8 inline-block cursor-default overflow-hidden rounded-lg bg-white p-6 text-black md:max-w-[500px]"
          ref={containerRef}
        >
          {children && children}
        </div>
      </SlideContainer>
    </StyledSlide>
  );
}

export default Slide;

/**
 * If the HTMLCollection has a length, return an array of the HTMLCollection, otherwise return an array
 * with a single div element.
 *
 * jest shows an error when trying to access the children of the title
 * and gsap doesn't work with HTMLCollection (ref.current.children's type)
 * so we need to use Array.from to convert it to an array
 * then check if there are any children and animate them or create a new div
 * to prevent the error
 *
 * @param {HTMLCollection} children - HTMLCollection
 * @returns [document.createElement('div')]
 */
function HTMLCollectionToArray(children: HTMLCollection): Element[] {
  return Array.from(children).length
    ? Array.from(children)
    : [document.createElement('div')];
}
