import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/layout/Page/Page';

import LineDetails from '../../components/shared/LineDetails/LineDetails';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const MetroSchedulesScreen = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <PageHeader text={t('metro-schedules-screen.title')} />

      <LineDetails line="line 1" />
      <LineDetails line="line 2" />
      <LineDetails line="line 3" />
    </Page>
  );
};
