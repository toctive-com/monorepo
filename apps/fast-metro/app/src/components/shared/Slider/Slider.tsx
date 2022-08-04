import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export default function Slider() {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        className="h-full w-full"
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide key={'slide-' + index + 1}>
            <Slide
              text={t(`get-started-screen.slide-${index + 1}`)}
              image={
                <img
                  alt={t(`get-started-screen.slide-${index + 1}`)}
                  src={`./assets/images/${index + 1}.jpg`}
                />
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to="/home">
        <PrimaryButton
          size="md"
          text={t('get-started-screen.finish-button')}
          className="w-full text-center"
        />
      </Link>
    </>
  );
}

interface Slide {
  text: string;
  image: any;
  children?: React.ReactNode;
}

/**
 * Slide is a one slide that used in Get Started screen
 *
 * @param {Slide}  - text - the text to display in the slide
 * @returns A React component that renders a slide with children
 */
function Slide({ text, image, children }: Slide) {
  return (
    <div className="mt-20 flex flex-col items-center gap-10">
      <div className="w-full">{image}</div>
      <span className="text-center text-xl">{text}</span>
      {children && children}
    </div>
  );
}
