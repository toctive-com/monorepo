import React, { useEffect, useRef, useState } from 'react';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import styled from 'styled-components';
import gsap from 'gsap';

/* eslint-disable-next-line */
export interface SliderProps {}

const StyledSlider = styled.div`
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(
    ${(props: { currentSlide: number }) => props.currentSlide * -100}%
  );
`;

export function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const slideContainerRef = useRef(null);

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      [prevButtonRef.current, nextButtonRef.current],
      {
        opacity: 0,
        y: 15,
      },
      { opacity: 1, duration: 0.5, y: 0, delay: 2, ease: 'power2.inOut' }
    );
  }, []);

  /**
   * We're setting the touchStart and touchEnd variables to the clientX value of the touch event.
   *
   * We're also setting the currentSlide variable to the currentSlide + 1 or currentSlide - 1 depending
   * on the direction of the swipe
   * @param e - the event object
   */
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  function handleTouchStart(e) {
    setTouchStart(e.nativeEvent.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.nativeEvent.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (
      touchStart - touchEnd > 150 &&
      currentSlide < props.children.length - 1
    ) {
      setCurrentSlide(currentSlide + 1);
    }

    if (touchStart - touchEnd < -150 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <StyledSlider>
      <div className="mx-auto w-11/12 md:w-5/6 lg:w-9/12 xl:w-8/12">
        <SlideContainer
          onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleTouchEnd()}
          ref={slideContainerRef}
          currentSlide={currentSlide}
          className="transition-all duration-500"
        >
          {React.Children.map(props.children, (child, index) => {
            if (index === currentSlide) {
              return {
                ...child,
                props: {
                  ...child.props,
                  active: true,
                  onClick: () => setCurrentSlide(index),
                },
              };
            }
            return {
              ...child,
              props: {
                ...child.props,
                active: false,
                onClick: () => setCurrentSlide(index),
              },
            };
          })}
        </SlideContainer>

        <div className="mt-8 flex items-center justify-between">
          <button
            ref={prevButtonRef}
            type="button"
            className="flex rounded border border-transparent px-4 py-2 text-gray-800 transition-all hover:border-gray-800 disabled:cursor-not-allowed disabled:border-0 disabled:text-gray-300 disabled:opacity-25"
            onClick={() => setCurrentSlide(currentSlide - 1)}
            disabled={currentSlide <= 0}
          >
            <CgArrowLongLeft className="h-6 w-10 pr-4 transition-all" />
            Prev
          </button>
          <button
            ref={nextButtonRef}
            type="button"
            className="flex rounded border border-transparent px-4 py-2 text-gray-800 transition-all hover:border-gray-800 disabled:cursor-not-allowed disabled:border-0 disabled:text-gray-300 disabled:opacity-25"
            onClick={() => setCurrentSlide(currentSlide + 1)}
            disabled={currentSlide >= React.Children.count(props.children) - 1}
          >
            Next
            <CgArrowLongRight className="h-6 w-10 pl-4 transition-all " />
          </button>
        </div>
      </div>
    </StyledSlider>
  );
}

export default Slider;
