import { formatTime } from '../../../utils/formatTime';
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import Ticket from '../../shared/Ticket/Ticket';
import { TicketColor } from '../../shared/Ticket/Ticket';

interface TripDetailsI {
  stationsNumber: number;
  ticketPrice: number;
  elderlyTicketPrice: number;
  tripTime: number;
  color: string;
  mainColor: TicketColor;
  className?: string | undefined;
}

export function TripDetails({
  stationsNumber,
  ticketPrice,
  elderlyTicketPrice,
  tripTime,
  mainColor,
  className,
}: TripDetailsI) {
  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <div className="station-number flex items-center justify-between">
        <span className="text-xl text-gray-500">
          Number of stations:{' '}
          <span className="text-xl font-bold text-black">{stationsNumber}</span>
        </span>
        <PrimaryButton size="sm" text="see all stations" />
      </div>

      <div className="flex flex-row items-center justify-between">
        <span className="ticket-price text-xl text-gray-500">
          Ticket Price:
          <span className="text-xl font-bold text-red-400">
            {ticketPrice} L.E
          </span>
        </span>
        <span className="text-base text-gray-500">
          For Elderly:{' '}
          <span className="text-xl font-bold text-red-400">
            {elderlyTicketPrice} L.E{' '}
          </span>
        </span>
      </div>

      <Ticket className="self-center" mainColor={mainColor} />

      <span className="trip-time self-center text-xl text-gray-500">
        Estimated trip time:{' '}
        <span className="text-xl font-bold text-black">
          {formatTime(tripTime)}
        </span>
      </span>
    </div>
  );
}

export default TripDetails;
