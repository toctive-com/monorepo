import React from 'react';
import Page from '../../components/layout/Page/Page';
import TripDetails from '../../components/layout/TripDetails/TripDetails';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import StationsSelector from '../../components/shared/StationsSelector/StationsSelector';
import TimerController from '../../components/shared/TimerController/TimerController';

export const StartTripScreen = () => {
  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader isBack={true} text="Start Trip" />
        <StationsSelector isFromTo={true} />

        <TripDetails
          stationsNumber={9}
          ticketPrice={10}
          elderlyTicketPrice={5}
          tripTime={380}
          mainColor="yellow"
          color="red"
        />

        <TimerController time={735} />
      </div>
    </Page>
  );
};
