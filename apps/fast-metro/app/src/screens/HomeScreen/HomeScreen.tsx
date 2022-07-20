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
          {cards.map((item, i) => (
            <Card text={item.label} to={item.href} />
          ))}
        </Features>
      </div>
    </Page>
  );
};

const cards = [
  { label: 'Start Trip', href: '/start-trip' },
  { label: 'Station services', href: '/station-services' },
  { label: 'Transit Stations', href: '/transit-stations' },
  { label: 'Safety Instructions', href: '/safety-instructions' },
  { label: 'Metro Schedules', href: '/metro-schedules' },
  { label: 'Violations and Fines', href: '/violations-and-fines' },
  { label: 'Closest Transit', href: '/closest-transit-stations' },
  { label: 'Subscription Information', href: '/subscription' },
];
