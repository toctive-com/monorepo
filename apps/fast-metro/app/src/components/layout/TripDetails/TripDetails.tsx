import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import Ticket from '../../shared/Ticket/Ticket';

interface TripDetailsI {
  stationsNumber: number;
  ticketPrice: number;
  elderlyTicketPrice: number;
  tripTime: number;
  color: string;
  mainColor: string;
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
    <div className={`flex flex-col gap-5 ${className}`}>
      <div className="station-number flex items-end justify-between">
        <span className="text-xl text-gray-500">
          number of stations:
          <span className="text-xl font-bold text-black">{stationsNumber}</span>
        </span>
        <PrimaryButton size="md" text="see all stations" />
      </div>

      <span className="ticket-price text-xl text-gray-500">
        Ticket Price:
        <span className="text-xl font-bold text-black">{ticketPrice}</span>
      </span>

      <Ticket className="self-center" mainColor={mainColor} />

      <span className="older-ticket-price -mt-4 self-center text-base text-gray-500">
        will be&nbsp;
        <span className="text-xl font-bold text-red-500">
          {elderlyTicketPrice} EL&nbsp;
        </span>
        for older
      </span>

      <span className="trip-time self-center text-xl text-gray-500">
        Estimated trip time:
        <span className="text-xl font-bold text-black">
          {Math.floor(tripTime / 60)} :{' '}
          {tripTime - Math.floor(tripTime / 60) * 60}
        </span>
      </span>
    </div>
  );
}

export default TripDetails;
