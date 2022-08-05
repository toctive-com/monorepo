import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/layout/Page/Page';

import LinkButton from '../../components/shared/LinkButton/LinkButton';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const StationServicesScreen = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div className="flex flex-col gap-8">
        <PageHeader text={t('station-services-screen.title')} />

        <LinkButton
          text={t('station-services-screen.services-by-station')}
          to="/station-services/services-by-station"
        />
        <LinkButton
          text={t('station-services-screen.search-for-services')}
          to="/station-services/search-for-services"
        />
      </div>
    </Page>
  );
};
