import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Slider() {
  const paginationRef = useRef(null);
  const { t } = useTranslation();
  console.log(t('testing', { returnObjects: true }));

  return (
    <Swiper
      className="w-full"
      // spaceBetween={50}
      slidesPerView={1}
      pagination={{
        el: paginationRef.current,
        clickable: true,
        renderBullet: function (index, className) {
          console.log(index, className);
          return (
            '<span className="' + className + '">' + (index + 1) + '</span>'
          );
        },
      }}
    >
      <SwiperSlide className="w-full">
        <Slide
          text={t('get-started-screen.slide-1')}
          image={<img alt="" src="./assets/images/1.jpg" />}
        />
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <Slide
          text={t('get-started-screen.slide-2')}
          image={<img alt="" src="./assets/images/2.jpg" />}
        />
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <Slide
          text={t('get-started-screen.slide-3')}
          image={<img alt="" src="./assets/images/3.jpg" />}
        >
          <Link to="/home">
            <PrimaryButton
              size="md"
              text={t('get-started-screen.finish-button')}
              className="w-full text-center"
            />
          </Link>
        </Slide>
      </SwiperSlide>
    </Swiper>
  );
}

interface Slide {
  text: string;
  image: any;
  children?: React.ReactNode;
}

function Slide({ text, image, children }: Slide) {
  return (
    <div className="nx-auto mt-20 flex flex-col items-center gap-10">
      <div className="h-40 w-60">{image}</div>
      <span className="text-center text-xl"> {text} </span>
      {children && children}
    </div>
  );
}
