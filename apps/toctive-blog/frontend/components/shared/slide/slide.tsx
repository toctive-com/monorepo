import { useDirection } from '@toctive/react-utils';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { HTMLCollectionToArray } from '../../../assets/js/HTMLCollectionToArray';

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
  position: relative;
  overflow: hidden;

  min-width: 100%;
  height: 800px;
  max-height: 80vh;

  border-radius: 1rem /* 16px */;
  border-width: 1px;

  color: white;
`;

const SlideBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* filter: blur(4px); */
  width: 100%;
  height: 100%;
  background: rgb(48, 31, 9);
  background-image: linear-gradient(
      ${(props: StyledProps) =>
        props.direction === 'rtl' ? '-90deg' : '90deg'},
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
  const [direction] = useDirection();

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
      <SlideContainer className={`sm:p-4 md:p-16`}>
        <SlideBackground image={image} direction={direction} />
        <div
          className="cursor-pointer overflow-hidden px-2 text-4xl backdrop-blur-sm sm:px-0 sm:text-5xl md:w-4/5 md:text-6xl lg:w-2/3 xl:w-1/2"
          ref={titleRef}
        >
          <h1>{title}</h1>
        </div>
        <div
          className="mt-8 inline-block cursor-default overflow-hidden rounded-lg  bg-white bg-opacity-70 p-6 text-sm text-black shadow-xl backdrop-blur-lg sm:text-base md:max-w-[500px]"
          ref={containerRef}
        >
          {children && children}
        </div>
      </SlideContainer>
    </StyledSlide>
  );
}

export default Slide;
