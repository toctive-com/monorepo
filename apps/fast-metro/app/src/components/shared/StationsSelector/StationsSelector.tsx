import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Select, { OnChangeValue, ActionMeta, StylesConfig } from 'react-select';
import { allStations } from '../../../data/Stations';

interface StationsSelectorI {
  isFromTo: boolean;
  className?: string;
  onChange?: (fromStation: stationOptionI, toStation: stationOptionI) => void;
  defaultFromStation?: stationOptionI;
  defaultToStation?: stationOptionI;
  placeholder?: string;
}

export interface stationOptionI {
  label: string | null;
  value: string | null;
}

/* A custom style for the react-select component. */
export const customStyles: StylesConfig = {
  container: (provided: any, state: any) => ({
    ...provided,
    border: '0px',
  }),

  control: (provided: any, state: any) => ({
    ...provided,
    background: '#60a5fa', // blue background
    border: '0px',
  }),

  valueContainer: (provided: any, state: any) => ({
    ...provided,
    background: '#60a5fa', // blue background
  }),

  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: 'white',
    background: '#60a5fa', // blue background
  }),

  placeholder: (provided: any, state: any) => ({
    ...provided,
    color: 'white',
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    background: state.isSelected ? '#60a5fa' : 'white', // blue or white background
  }),

  groupHeading: (provided: any, state: any) => ({
    ...provided,
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1rem',
  }),

  clearIndicator: (provided: any, state: any) => ({
    ...provided,
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  }),

  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  }),

  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    background: 'white',
  }),
};

export function StationsSelector({
  isFromTo = true,
  className,
  onChange,
  defaultFromStation,
  defaultToStation,
  placeholder = '',
}: StationsSelectorI) {
  const emptyStation: stationOptionI = { label: null, value: null };
  const [fromStation, setFromStation] = useState<stationOptionI>(
    defaultFromStation || emptyStation
  );

  const [toStation, setToStation] = useState<stationOptionI>(
    defaultToStation || emptyStation
  );

  const { t, i18n } = useTranslation();

  const [stations, setStations] = useState<stationOptionI[]>([]);
  useEffect(() => {
    const currentLanguage = (i18n.language as 'en' | 'ar').split('-')[0];

    const stationsForSelector = [];
    const lineOne: any = {
      label: t('stations-selector.line-one'),
      options: [],
    };
    const lineTwo: any = {
      label: t('stations-selector.line-two'),
      options: [],
    };
    const lineThree: any = {
      label: t('stations-selector.line-three'),
      options: [],
    };
    for (const station of allStations) {
      if (station.lines.some((line) => line.lineNumber === 1)) {
        lineOne.options.push({
          value: station.name.en,
          label: station.name[currentLanguage as 'en' | 'ar'],
        });
      } else if (station.lines.some((line) => line.lineNumber === 2)) {
        lineTwo.options.push({
          value: station.name.en,
          label: station.name[currentLanguage as 'en' | 'ar'],
        });
      } else if (station.lines.some((line) => line.lineNumber === 3)) {
        lineThree.options.push({
          value: station.name.en,
          label: station.name[currentLanguage as 'en' | 'ar'],
        });
      }
    }
    stationsForSelector.push(lineOne);
    stationsForSelector.push(lineTwo);
    stationsForSelector.push(lineThree);
    setStations(stationsForSelector);
  }, [i18n.language, t]);

  /* If fromStation and toStation are selected, call onChange function. */
  useEffect(() => {
    if (isFromTo) {
      if (fromStation.value && toStation.value && onChange) {
        onChange(fromStation, toStation);
      }
    } else {
      if (fromStation.value && onChange) {
        onChange(fromStation, toStation);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromStation, toStation]);

  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <div
        className={`flex justify-evenly rounded-xl bg-[#60a5fa] p-5 ${
          isFromTo ? 'rounded-b-none' : ''
        } `}
      >
        <span className="w-1/4 self-center text-xl text-white">
          {t('stations-selector.from')}
        </span>

        <Select
          className="w-3/4"
          placeholder={t('stations-selector.select-station')}
          options={stations}
          isClearable={true}
          styles={customStyles}
          defaultValue={defaultFromStation}
          onChange={(
            option: OnChangeValue<unknown, boolean>,
            actionMeta: ActionMeta<unknown>
          ) => handleStationChange(option, actionMeta, setFromStation)}
        />
      </div>

      {isFromTo && (
        <div
          className={`flex justify-evenly rounded-xl rounded-t-none bg-[#60a5fa] p-5`}
        >
          <span className="w-1/4 self-center text-xl text-white">
            {t('stations-selector.to')}
          </span>
          <Select
            className="w-3/4"
            placeholder={t('stations-selector.select-station')}
            options={stations}
            isClearable={true}
            defaultValue={defaultToStation}
            styles={customStyles}
            onChange={(
              option: OnChangeValue<unknown, boolean>,
              actionMeta: ActionMeta<unknown>
            ) => handleStationChange(option, actionMeta, setToStation)}
          />
        </div>
      )}
    </div>
  );
}

export default StationsSelector;

/**
   * Handle station change and set the selected station.
   * onChange prop in Select component takes a callback which takes two parameters
   *  option - the selected option
   *  action - the action that triggered the change
   * 
   * to handle fromStation change and to station change, we need to take another callback
   * stateSetter must be setFromStation or setToStation to change the state value.
   * 
   * ### for example:
   * ```
   * <Select options={stations}
          onChange={(
            option: OnChangeValue<unknown, boolean>,
            actionMeta: ActionMeta<unknown>
          ) => handleStationChange(option, actionMeta, setToStation)}
        />
        ```
   * 
   * @param option - OnChangeValue<unknown, boolean>
   * @param actionMeta - ActionMeta<unknown>
   * @param stateSetter - React.Dispatch<React.SetStateAction<stationOptionI>>
   * @returns The return type is a function that takes in 3 parameters.
   */
const handleStationChange = (
  option: OnChangeValue<unknown, boolean>,
  actionMeta: ActionMeta<unknown>,
  stateSetter: React.Dispatch<React.SetStateAction<stationOptionI>>
) => {
  /* Clearing the state when the user clicks the clear button. */
  if (actionMeta.action === 'clear') {
    stateSetter({ label: null, value: null });
    return;
  }

  (option as stationOptionI)?.value && stateSetter(option as stationOptionI);
};
