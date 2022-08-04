import React from 'react';

import Page from '../../components/layout/Page/Page';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import { useTranslation } from 'react-i18next';

export function AboutUsScreen() {
  const { t } = useTranslation();

  return (
    <Page className="pb-0">
      <PageHeader text={t('about-us-screen.title')} isBack={false} />
      <div className="-mt-20 flex h-full flex-col items-center justify-center gap-4">
        <a href="https://toctive.com">
          <span className="text-2xl font-semibold">
            {t('about-us-screen.app-name')}
          </span>
        </a>
        <a href="mailto:info@toctive.com">
          <span className="text-xl font-semibold">info@toctive.com</span>
        </a>
        <span className="text-md text-gray-400">
          {t('about-us-screen.version')} 1.0
        </span>
        <div className="flex w-full justify-evenly ">
          <FaFacebookSquare size={48} />
          <FaTwitterSquare size={48} />
        </div>
      </div>
    </Page>
  );
}
