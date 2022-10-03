import { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Page from '../../components/layout/Page/Page';
import { Option } from '../../components/shared/Alert/Option';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import TextBox from '../../components/shared/TextBox/TextBox';

export const TicketsPricesScreen = () => {
  const { t } = useTranslation();
  const options = [
    {
      label: t('tickets-prices-screen.lower-that-4.title'),
      value: 'lower-that-4',
    },
    {
      label: t('tickets-prices-screen.special-needs.title'),
      value: 'special-needs',
    },
    {
      label: t('tickets-prices-screen.public.title'),
      value: 'public',
    },
    {
      label: t('tickets-prices-screen.students.title'),
      value: 'students',
    },
    {
      label: t('tickets-prices-screen.elderly-from-60.title'),
      value: 'elderly-from-60',
    },
    {
      label: t('tickets-prices-screen.elderly-older-than-70.title'),
      value: 'elderly-older-than-70',
    },
  ];

  const prices: any = {
    'lower-that-4': Array.from(
      t('tickets-prices-screen.lower-that-4.prices', {
        returnObjects: true,
      })
    ),
    'special-needs': Array.from(
      t('tickets-prices-screen.special-needs.prices', {
        returnObjects: true,
      })
    ),
    public: Array.from(
      t('tickets-prices-screen.public.prices', {
        returnObjects: true,
      })
    ),
    students: Array.from(
      t('tickets-prices-screen.students.prices', {
        returnObjects: true,
      })
    ),
    'elderly-from-60': Array.from(
      t('tickets-prices-screen.elderly-from-60.prices', {
        returnObjects: true,
      })
    ),
    'elderly-older-than-70': Array.from(
      t('tickets-prices-screen.elderly-older-than-70.prices', {
        returnObjects: true,
      })
    ),
  };

  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].value
  );
  const optionId = useId();

  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader text={t('tickets-prices-screen.title')} />

        <div className="flex flex-col gap-4 pb-8">
          {options.map((option, index) => (
            <div className="flex gap-2 px-8" key={`${index}-${optionId}`}>
              <Option
                text={option.label}
                value={option.value}
                selectedValue={selectedOption}
                setValue={(value) => {
                  setSelectedOption(value);
                }}
              />
            </div>
          ))}

          <div className="mt-8">
            {selectedOption &&
              prices[selectedOption]?.map((price: string, index: number) => (
                <TextBox key={'price-' + index}>{price}</TextBox>
              ))}
          </div>
        </div>
      </div>
    </Page>
  );
};
