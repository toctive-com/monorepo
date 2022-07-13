import React from 'react';
import Page from '../../components/layout/Page/Page';

import LinkButton from '../../components/shared/LinkButton/LinkButton';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const StationServicesScreen = () => {
  return (
    <Page>
      <div className="flex flex-col gap-8">
        <PageHeader text="Station Services" />

        <LinkButton
          text="Services by Station"
          to="/station-services/services-by-station"
        />
        <LinkButton
          text="Search for Services"
          to="/station-services/search-for-services"
        />
      </div>
    </Page>
  );
};
