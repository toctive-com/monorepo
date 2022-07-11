import React from 'react';
import TripDetails from '../../components/layout/TripDetails/TripDetails';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import StationsSelector from '../../components/shared/StationsSelector/StationsSelector';
import TimerController from '../../components/shared/TimerController/TimerController';

export const StartTripScreen = () => {
  return (
    <div className="flex flex-col gap-5 px-5">
      <PageHeader className="m-0" isBack={true} text="Start Trip" />

      <StationsSelector isFromTo={true} />

      <TripDetails
        stationsNumber={9}
        ticketPrice={10}
        elderlyTicketPrice={5}
        tripTime={380}
        mainColor="red-500"
        color={'red-500'}
      />

      <TimerController time={735} />
    </div>
  );
};
