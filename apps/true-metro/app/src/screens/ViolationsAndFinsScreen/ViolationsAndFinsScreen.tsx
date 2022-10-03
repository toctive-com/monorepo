import { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Page from '../../components/layout/Page/Page';
import { Option } from '../../components/shared/Alert/Option';

import PageHeader from '../../components/shared/PageHeader/PageHeader';
import TextBox from '../../components/shared/TextBox/TextBox';

export const ViolationsAndFinsScreen = () => {
  const { t } = useTranslation();
  const options = [
    {
      label: t('violations-fins-screen.30-egp-class.title'),
      value: '30 EGP class',
    },
    {
      label: t('violations-fins-screen.50-egp-class.title'),
      value: '50 EGP class',
    },
    {
      label: t('violations-fins-screen.other-fins.title'),
      value: 'Other fins',
    },
  ];

  const whoCanCollectFins: any = {
    '30 EGP class': t(
      'violations-fins-screen.30-egp-class.who-can-collect-fins'
    ),
    '50 EGP class': t(
      'violations-fins-screen.50-egp-class.who-can-collect-fins'
    ),
    'Other fins': t('violations-fins-screen.other-fins.who-can-collect-fins'),
  };

  const fins: any = {
    '30 EGP class': Array.from(
      t('violations-fins-screen.30-egp-class.violations', {
        returnObjects: true,
      })
    ),
    '50 EGP class': Array.from(
      t('violations-fins-screen.50-egp-class.violations', {
        returnObjects: true,
      })
    ),
    'Other fins': Array.from(
      t('violations-fins-screen.other-fins.violations', {
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
        <PageHeader text={t('violations-fins-screen.title')} />

        <div className="flex flex-col gap-4 py-8">
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

          {selectedOption && (
            <h2 className="my-6 text-center text-lg font-bold">
              {whoCanCollectFins[selectedOption]}
            </h2>
          )}

          {selectedOption &&
            fins[selectedOption]?.map((fin: string, index: number) => (
              <TextBox key={'fins-' + index}>{fin}</TextBox>
            ))}
        </div>
      </div>
    </Page>
  );
};
