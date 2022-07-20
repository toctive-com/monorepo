import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/layout/Page/Page';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
export const MapScreen = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader text={t`map-screen.title`} isBack={false} />
      </div>
    </Page>
  );
};
