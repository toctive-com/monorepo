import LinesColors from '../../components/shared/LinesColors/LinesColors';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import Station from '../../components/shared/Station/Station';
import TransitAlert from '../../components/shared/TransitAlert/TransitAlert';

export const SeeAllStations = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-50 p-8">
      <PageHeader text="Trip Stations" />

      <div className="body mt-6 flex flex-col gap-4">
        <Station name="ain shams" />
        <Station name="ain shams" />
        <Station name="Transit Station" />
        <TransitAlert line={5} direction="EL-moneb" className="mb-2" />
        <Station name="ain shams" />
        <Station name="ain shams" lastStation={true} />
      </div>

      <LinesColors className="mt-8" />
    </div>
  );
};
