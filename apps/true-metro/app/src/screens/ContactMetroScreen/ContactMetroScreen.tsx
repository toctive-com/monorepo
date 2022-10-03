import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { Page } from '../../components/layout/Page/Page';

import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const ContactMetroScreen = () => {
  const { t } = useTranslation();

  return (
    <Page className="pb-0">
      <PageHeader text={t('contact-metro-screen.title')} isBack={false} />
      <div className="-mt-20 flex h-full flex-col items-center justify-center gap-4">
        <span className="text-xl font-semibold">
          {t('contact-metro-screen.cairo-metro')}
        </span>
        <span className="text-xl font-semibold">metro@cairo.gov.eg</span>
        <a href="tel:+201234567890">
          <span className="text-md text-gray-400" dir="auto">
            +2 012 345 678 90
          </span>
        </a>
        <div className="flex gap-20">
          <FaFacebookSquare size={48} />
          <FaTwitterSquare size={48} />
          <FaWhatsappSquare size={48} />
        </div>
      </div>
    </Page>
  );
};
