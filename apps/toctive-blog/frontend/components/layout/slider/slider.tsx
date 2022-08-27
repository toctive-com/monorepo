import { useDirection } from '@toctive/react-utils';
import gsap from 'gsap';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useRef, useState } from 'react';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SliderProps {}

const StyledSlider = styled.div`
  overflow: hidden;
`;

const SlideContainer: any = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(
    ${(props: { currentSlide: number; direction: string }) => {
      const direction = props.direction === 'rtl' ? 1 : -1;
      return props.currentSlide * 100 * direction + '%';
    }}
  );
`;

export function Slider(props: { children: React.PropsWithChildren }) {
  const { t } = useTranslation();

  // set the default active slide the middle one (if there are three, choose the second one)
  const [currentSlide, setCurrentSlide] = useState<number>(
    Math.floor(React.Children.count(props.children) / 2)
  );

  const slideContainerRef = useRef(null);

  // animate the buttons
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      [prevButtonRef.current, nextButtonRef.current],
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        duration: 0.5,
        y: 0,
        delay: 1,
        ease: 'power2.inOut',
      }
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
  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setTouchStart(e.nativeEvent.targetTouches[0].clientX);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    setTouchEnd(e.nativeEvent.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    const pageIsRTL = direction === 'rtl' ? true : false;
    const directionIsToRight = touchStart - touchEnd < -150;
    const directionIsToLeft = touchStart - touchEnd > 150;
    const currentSlideIsNotLast =
      currentSlide < React.Children.count(props.children) - 1;
    const currentSlideIsNotFirst = currentSlide > 0;

    if (pageIsRTL) {
      if (directionIsToRight && currentSlideIsNotLast) {
        setCurrentSlide(currentSlide + 1);
      } else if (directionIsToLeft && currentSlideIsNotFirst) {
        setCurrentSlide(currentSlide - 1);
      }
    } else {
      if (directionIsToLeft && currentSlideIsNotLast) {
        setCurrentSlide(currentSlide + 1);
      } else if (directionIsToRight && currentSlideIsNotFirst) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  }

  const [direction] = useDirection();

  return (
    <StyledSlider>
      <div className="mx-auto w-11/12 md:w-5/6 lg:w-9/12 xl:w-8/12">
        <SlideContainer
          direction={direction}
          onTouchStart={(touchStartEvent: any) =>
            handleTouchStart(touchStartEvent)
          }
          onTouchMove={(touchMoveEvent: any) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleTouchEnd()}
          ref={slideContainerRef}
          currentSlide={currentSlide}
          className="transition-all duration-500"
        >
          {
            React.Children.map(
              props.children,
              (child: { children?: React.ReactNode; props?: [] }, index) => {
                // if the current slide is the same as the index,
                // then pass `active=true` to the child
                if (index === currentSlide) {
                  return {
                    ...child,
                    props: {
                      ...child?.props,
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
              }
            ) as React.ReactNode
          }
        </SlideContainer>

        <div className="mt-8 flex items-center justify-between">
          <button
            ref={prevButtonRef}
            type="button"
            className="flex rounded border border-transparent px-4 py-2 text-gray-800 transition-all hover:border-gray-800 disabled:cursor-not-allowed disabled:border-0 disabled:text-gray-300 disabled:opacity-25"
            onClick={() => setCurrentSlide(currentSlide - 1)}
            disabled={currentSlide <= 0}
          >
            {direction === 'ltr' ? (
              <CgArrowLongLeft className="h-6 w-10 pr-4 transition-all" />
            ) : (
              <CgArrowLongRight className="h-6 w-10 pl-4 transition-all" />
            )}
            {t('slider.previous')}
          </button>
          <button
            ref={nextButtonRef}
            type="button"
            className="flex rounded border border-transparent px-4 py-2 text-gray-800 transition-all hover:border-gray-800 disabled:cursor-not-allowed disabled:border-0 disabled:text-gray-300 disabled:opacity-25"
            onClick={() => setCurrentSlide(currentSlide + 1)}
            disabled={currentSlide >= React.Children.count(props.children) - 1}
          >
            {t('slider.next')}
            {direction === 'ltr' ? (
              <CgArrowLongRight className="h-6 w-10 pl-4 transition-all" />
            ) : (
              <CgArrowLongLeft className="h-6 w-10 pr-4 transition-all" />
            )}
          </button>
        </div>
      </div>
    </StyledSlider>
  );
}

export default Slider;
