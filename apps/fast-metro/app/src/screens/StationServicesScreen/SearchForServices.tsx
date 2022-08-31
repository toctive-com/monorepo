import axios from 'axios';
import { useEffect, useState } from 'react';
import Page from '../../components/layout/Page/Page';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import PageHeader from '../../components/shared/PageHeader/PageHeader';
import { customStyles } from '../../components/shared/StationsSelector/StationsSelector';
import TextBox from '../../components/shared/TextBox/TextBox';

export const SearchForServices = () => {
  const [station, setStation] = useState<any>([]);
  const [servicesForSelector, setServicesForSelector] = useState<any>({});
  const [services, setServices] = useState<any>({});
  const [error, setError] = useState<boolean>(false);

  const { t } = useTranslation();

  useEffect(() => {
    // TODO: store services in local storage using @toctive/fetchStorage Library
    axios
      .get('/api/v1/services', { params: { lang: i18next.language } })
      .then(({ data }) => {
        const services = Object.keys(data).map((station) => ({
          label: t(`stations.${station}`, station),
          value: station,
        }));

        setServices(data);
        setServicesForSelector(services);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [t]);

  return (
    <Page>
      <div className="flex flex-col gap-8">
        <PageHeader text={t('search-for-services-screen.title')} />
        <Select
          options={servicesForSelector}
          isClearable={true}
          styles={customStyles}
        />
        {error && (
          <p className="text-red-500">
            {t('search-for-services-screen.no-services-found')}
          </p>
        )}

        {Object.keys(services).length > 0 &&
          services[station]?.map((service: any) => (
            <TextBox key={service.name}>
              <p className="text-lg">{service.name}</p>
              <p className="text-sm">{service.notes}</p>
            </TextBox>
          ))}
      </div>
    </Page>
  );
};
