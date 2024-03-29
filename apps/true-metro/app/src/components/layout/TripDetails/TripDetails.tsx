import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import Ticket, { TicketColor } from '../../shared/Ticket/Ticket';

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
    details.color = 'green';
  } else {
    details.price = 10;
    details.priceForElderly = 5;
    details.color = 'red';
  }

  return details;
};

export function TripDetails({ tripStations, className }: TripDetailsI) {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <div className="station-number xs:gap-4 flex flex-col items-center justify-between gap-2">

        <span className="text-xl text-gray-500">
          {t('trip-details.number-of-stations')}:{' '}
          <span className="text-xl font-bold text-black dark:text-white">
            {tripStations.length}
          </span>
        </span>

          {/* see all stations btn */}
        <Link
          // we must use english name of stations as identifiers
          to={`/start-trip/see-all-stations?start=${
            tripStations[0].name.en
          }&end=${tripStations.at(-1).name.en}`}
        >
          <PrimaryButton  size="md" text={t('trip-details.see-all-stations')} />
        </Link>

      </div>

      <div className="xs:gap-4 flex flex-col items-center justify-between gap-2">
          {/* ticket price for public */}
        <span className="ticket-price text-xl text-gray-500 dark:text-gray-50">
          {t('trip-details.ticket-price')}:{' '}

          {/* path length */}
          <span className="text-xl font-bold text-blue-400 dark:text-blue-500">
            {ticketDetails(tripStations.length).price}{' '}
            {t`start-trip-screen.egp`}
          </span>

        </span>

        <span className="text-base text-gray-500 dark:text-gray-50">
          {t('trip-details.for-elderly')}:{' '}
          <span className="text-xl font-bold text-blue-400 dark:text-blue-500">
            {ticketDetails(tripStations.length).priceForElderly}{' '}
            {t`start-trip-screen.egp`}
          </span>
        </span>
      </div>

      <Ticket
        className="self-center"
        mainColor={ticketDetails(tripStations.length).color as TicketColor}
      />

      {/* <span className="trip-time self-center text-xl text-gray-500 dark:text-gray-100">
        {t('trip-details.estimated-trip-time')}:{' '}
        <span
          dir="auto"
          className="text-xl font-bold text-black dark:text-white"
        >
          {formatTime(tripStations.length * 60 * 6)}
        </span>
      </span> */}
    </div>
  );
}

export default TripDetails;
