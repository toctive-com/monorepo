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
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.split('-')[0];
  const isDarkMode = document.body.classList.contains('dark')
    ? 'dark'
    : 'light';

  return (
    <>
      <Swiper
      //!static
        className="h-full w-full  flex flex-col  "
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
                  className="mx-auto object-contain !max-w-[90%]"
                  alt={t(`get-started-screen.slide-${index + 1}`)}
                  src={`./assets/images/get-started/${
                    index + 1
                  }-${currentLanguage}-${isDarkMode}.png`}
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
          className="w-full text-center mb-2"
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
    <div className="flex h-full flex-col items-center ">
      <div className="w-full">{image}</div>
      <span className="text-center text-xl">{text}</span>
      {children && children}
    </div>
  );
}

