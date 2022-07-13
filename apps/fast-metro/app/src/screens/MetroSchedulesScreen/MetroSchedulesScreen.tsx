import React from 'react';
import Page from '../../components/layout/Page/Page';

import LineDetails from '../../components/shared/LineDetails/LineDetails';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const MetroSchedulesScreen = () => {
  return (
    <Page>
      <PageHeader text="Metro Schedules" />

      <LineDetails line="line 1" />
      <LineDetails line="line 2" />
      <LineDetails line="line 3" />
    </Page>
  );
};
