import Features from '../../components/layout/Features/Features';
import Page from '../../components/layout/Page/Page';
import { useTranslation } from 'react-i18next';

import { Card } from '../../components/shared/Card/Card';
import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const HomeScreen = () => {
  const { t } = useTranslation();
  const cards = [
    { label: t`home-screen.start-trip`, href: '/start-trip' },
    { label: t`home-screen.station-services`, href: '/station-services' },
    { label: t`home-screen.transit-stations`, href: '/transit-stations' },
    { label: t`home-screen.safety-instructions`, href: '/safety-instructions' },
    { label: t`home-screen.metro-schedules`, href: '/metro-schedules' },
    {
      label: t`home-screen.violations-and-fines`,
      href: '/violations-and-fines',
    },
    {
      label: t`home-screen.closest-transit`,
      href: '/closest-transit-stations',
    },
    { label: t`home-screen.subscription-information`, href: '/subscription' },
  ];

  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader text={t`home-screen.title`} isBack={false} />

        <Features>
          {cards.map((item, index) => (
            <Card text={item.label} to={item.href} key={index} />
          ))}
        </Features>
      </div>
    </Page>
  );
};
