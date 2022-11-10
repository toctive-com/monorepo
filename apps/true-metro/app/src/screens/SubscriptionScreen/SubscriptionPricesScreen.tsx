import { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Page from '../../components/layout/Page/Page';
import { Option } from '../../components/shared/Alert/Option';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import TextBox from '../../components/shared/TextBox/TextBox';

export const SubscriptionPricesScreen = () => {
  const { t } = useTranslation();
  const options = [
    {
      label: t('subscription-prices-screen.students.title'),
      value: 'students',
    },
    {
      label: t('subscription-prices-screen.public.title'),
      value: 'public',
    },
    {
      label: t('subscription-prices-screen.special-needs.title'),
      value: 'special-needs',
    },
    {
      label: t('subscription-prices-screen.elderly-from-60.title'),
      value: 'elderly-from-60',
    },
    {
      label: t('subscription-prices-screen.elderly-older-than-70.title'),
      value: 'elderly-older-than-70',
    },
  ];

  const prices: Record<string, any[]> = {
    'special-needs': Array.from(
      t('subscription-prices-screen.special-needs.prices', {
        returnObjects: true,
      })
    ),
    public: Array.from(
      t('subscription-prices-screen.public.prices', {
        returnObjects: true,
      })
    ),
    students: Array.from(
      t('subscription-prices-screen.students.prices', {
        returnObjects: true,
      })
    ),
    'elderly-from-60': Array.from(
      t('subscription-prices-screen.elderly-from-60.prices', {
        returnObjects: true,
      })
    ),
    'elderly-older-than-70': Array.from(
      t('subscription-prices-screen.elderly-older-than-70.prices', {
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
        <PageHeader text={t('subscription-prices-screen.title')} />

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
              prices[selectedOption]?.map(
                (plan: Record<string, string | []>, index: number) => (
                  <div key={'plan-' + index} className="my-4">
                    <TextBox>
                      <h1 className="text-lg font-medium">
                        {plan['subscription-type']}:
                      </h1>
                      <span className="mx-4">{plan['price']}</span>
                    </TextBox>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </Page>
  );
};
