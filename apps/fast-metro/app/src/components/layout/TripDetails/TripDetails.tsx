import { Link } from 'react-router-dom';
import { formatTime } from '../../../utils/formatTime';
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import Ticket from '../../shared/Ticket/Ticket';
import { TicketColor } from '../../shared/Ticket/Ticket';

interface TripDetailsI {
  tripStations: any[];
  className?: string | undefined;
}
const ticketDetails = (stationsNumber: number) => {
  const details = {
    price: 0,
    priceForElderly: 0,
    color: 'yellow',
  };

  if (stationsNumber <= 9) {
    details.price = 5;
    details.priceForElderly = 2.5;
    details.color = 'yellow';
  } else if (stationsNumber <= 16) {
    details.price = 7;
    details.priceForElderly = 3.5;
    details.color = 'red';
  } else {
    details.price = 10;
    details.priceForElderly = 5;
    details.color = 'green';
  }

  return details;
};

export function TripDetails({ tripStations, className }: TripDetailsI) {
  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <div className="station-number flex items-center justify-between">
        <span className="text-xl text-gray-500">
          Number of stations:{' '}
          <span className="text-xl font-bold text-black">
            {tripStations.length}
          </span>
        </span>
        <Link
          to={`/start-trip/see-all-stations?start=${
            tripStations[0].name.en
          }&end=${tripStations.at(-1).name.en}`}
        >
          <PrimaryButton size="sm" text="see all stations" />
        </Link>
      </div>

      <div className="flex flex-row items-center justify-between">
        <span className="ticket-price text-xl text-gray-500">
          Ticket Price:
          <span className="text-xl font-bold text-red-400">
            {ticketDetails(tripStations.length).price} L.E
          </span>
        </span>
        <span className="text-base text-gray-500">
          For Elderly:{' '}
          <span className="text-xl font-bold text-red-400">
            {ticketDetails(tripStations.length).priceForElderly} L.E{' '}
          </span>
        </span>
      </div>

      <Ticket
        className="self-center"
        mainColor={ticketDetails(tripStations.length).color as TicketColor}
      />

      <span className="trip-time self-center text-xl text-gray-500">
        Estimated trip time:{' '}
        <span className="text-xl font-bold text-black">
          {formatTime(tripStations.length * 180)}
        </span>
      </span>
    </div>
  );
}

export default TripDetails;
