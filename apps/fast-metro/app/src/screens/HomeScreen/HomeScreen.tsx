import React from 'react';

import Features from '../../components/layout/Features/Features';
import Page from '../../components/layout/Page/Page';

import { Card } from '../../components/shared/Card/Card';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const HomeScreen = () => {
  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader text="Home" isBack={false} />

        <Features>
          <Card text="Start Trip" to="/start-trip" />
          <Card text="Station services" to="/station-services" />
          <Card text="Transit Stations" to="/transit-stations" />
          <Card text="Safety Instructions" to="/safety-instructions" />
          <Card text="Metro Schedules" to="/metro-schedules" />
          <Card text="Violations and Fines" to="/violations-and-fines" />
          <Card text="Closest Transit" to="/closest-transit-stations" />
          <Card text="Subscription Information" to="/subscription" />
        </Features>
      </div>
    </Page>
  );
};
