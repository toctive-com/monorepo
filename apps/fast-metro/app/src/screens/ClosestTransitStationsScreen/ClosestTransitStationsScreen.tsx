import TripDetails from '../../components/layout/TripDetails/TripDetails';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import StationsSelector from '../../components/shared/StationsSelector/StationsSelector';
import TimerController from '../../components/shared/TimerController/TimerController';

export const ClosestTransitStationsScreen = () => {
  return (
    <div className="flex flex-col gap-5 bg-gray-50 px-5">
      <PageHeader className="m-0" isBack={true} text="Closest Transit" />

      <StationsSelector isFromTo={false} />

      <TripDetails
        stationsNumber={9}
        ticketPrice={10}
        elderlyTicketPrice={5}
        tripTime={380}
        mainColor="red"
        color={'red-500'}
      />

      <TimerController time={735} />
    </div>
  );
};
