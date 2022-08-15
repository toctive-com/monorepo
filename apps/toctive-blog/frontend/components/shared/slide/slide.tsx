import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
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

  border-radius: 1rem /* 16px */;

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
  const slideRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  // to make sure the animation is only run once on first render
  const [firstRender, setFirstRender] = useState(true);

  // animate the slide in
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut', delay: 0 },
    });

    // scale the slide to full size if it's active
    tl.to(slideRef.current, { scale: active ? 1 : 0.85 });

    // we need to animate the slides on the first render only
    // to make sure they're all in the right position
    if (!firstRender) return;
    setFirstRender(false);

    // for the active slide, animate the title and content in
    if (active) {
      tl.to([contentRef.current, titleRef.current], {
        opacity: 0,
        duration: 0,
        delay: -1,
      });

      tl.from(slideRef.current, {
        height: 0,
        opacity: 0,
        scale: 0.85,
      })
        .fromTo(
          containerRef.current,
          {
            opacity: 0,
            y: 30,
            height: 0,
            delay: -1,
            ease: 'power2.inOut',
          },
          { opacity: 1, y: 0, height: 'auto', delay: -1 }
        )
        .fromTo(
          [titleRef.current, contentRef.current],
          {
            opacity: 0,
            y: -30,
            delay: -3,
          },
          {
            opacity: 1,
            y: 0,
            ease: 'none',
            delay: 0,
          }
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
      <SlideContainer image={image} className={`border p-2 sm:p-4 md:p-16`}>
        <h1
          className="cursor-pointer text-5xl sm:text-6xl md:w-4/5 md:text-7xl lg:w-2/3 xl:w-1/2"
          ref={titleRef}
        >
          {title}
        </h1>
        <div
          className="mt-8 inline-block cursor-default rounded-lg bg-white p-6 text-black md:max-w-[500px]"
          ref={containerRef}
        >
          <div ref={contentRef}>{children && children}</div>
        </div>
      </SlideContainer>
    </StyledSlide>
  );
}

export default Slide;
