import { useId, useState } from 'react';

import Page from '../../components/layout/Page/Page';

import PageHeader from '../../components/shared/PageHeader/PageHeader';

export const ViolationsAndFinesScreen = () => {
  const options = [
    { label: 'first', value: 'first' },
    { label: 'second', value: 'second' },
  ];
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const optionId = useId();

  return (
    <Page>
      <div className="flex flex-col gap-10">
        <PageHeader text="Transit stations" />

        <div className="flex flex-col gap-4">
          {options.map((option, index) => (
            <div className="flex gap-2" key={`index-${optionId}`}>
              <input
                value={option.value}
                type="checkbox"
                checked={index === selectedOption}
              />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};
