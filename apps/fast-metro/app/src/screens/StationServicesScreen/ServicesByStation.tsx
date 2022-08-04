import { useEffect, useState } from 'react';
import axios from 'axios';
import Page from '../../components/layout/Page/Page';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import StationsSelector from '../../components/shared/StationsSelector/StationsSelector';
import i18next from 'i18next';
import TextBox from '../../components/shared/TextBox/TextBox';
import { useTranslation } from 'react-i18next';

export const ServicesByStation = () => {
  const [station, setStation] = useState<any>(null);
  const [services, setServices] = useState<any>([]);

  const { t } = useTranslation();

  useEffect(() => {
    // TODO: store services in local storage using @toctive/fetchStorage Library
    axios
      .get('/api/v1/services', { params: { lang: i18next.language } })
      .then(({ data }) => {
        setServices(data);
      });
  }, [station]);

  return (
    <Page>
      <div className="flex flex-col gap-8">
        <PageHeader text={t('services-by-station-screen.title')} />
        <StationsSelector
          isFromTo={false}
          onChange={(fromStation) => setStation(fromStation)}
        />
        {Object.keys(services).length > 0 &&
          services[station?.value.toLowerCase()]?.map((service: any) => (
            <TextBox key={service.name}>
              <p className="text-lg">{service.name}</p>
              <p className="text-sm">{service.notes}</p>
            </TextBox>
          ))}
      </div>
    </Page>
  );
};
