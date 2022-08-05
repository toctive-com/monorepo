import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Page from '../../../components/layout/Page/Page';
import PageHeader from '../../../components/shared/PageHeader/PageHeader';

import error_404 from '../../../assets/images/404.svg';
import PrimaryButton from '../../../components/shared/PrimaryButton/PrimaryButton';
export const NotFoundScreen = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader
          text={t`error-screen.not-found-screen.title`}
          isBack={false}
        />
        <img src={error_404} alt="Not Found Page" />
        <p className="text-center text-xl">{t`error-screen.not-found-screen.subtitle`}</p>
        <p className="text-center">{t`error-screen.not-found-screen.content`}</p>
        <PrimaryButton
          onClick={() => window.history.back()}
          text={
            <div className="flex items-center gap-4">
              <HiOutlineArrowLeft /> Go Back
            </div>
          }
        />
      </div>
    </Page>
  );
};

export default NotFoundScreen;
