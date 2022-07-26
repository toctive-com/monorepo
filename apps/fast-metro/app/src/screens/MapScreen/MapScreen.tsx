import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/layout/Page/Page';
import metroMap from '../../assets/images/metro-map.jpg';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import { IonSlide, IonSlides } from '@ionic/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { Scrollbar, Zoom } from 'swiper';
import 'swiper/css/zoom';
import 'swiper/css/scrollbar';

export const MapScreen = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div className="flex h-full flex-col">
        <PageHeader text={t`map-screen.title`} isBack={false} />
        <div className="flex h-full w-full flex-col">
          <Swiper
            modules={[Scrollbar, Zoom]}
            zoom={true}
            scrollbar={true}
            className="h-full"
          >
            <SwiperSlide className="h-full">
              <div className="swiper-zoom-container h-full w-full">
                <img
                  src={metroMap}
                  alt="latest metro map (2020-9)"
                  className="!h-full object-cover"
                />
                {/* <img src="assets/img/{{ img }}.png" /> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Page>
  );
};
