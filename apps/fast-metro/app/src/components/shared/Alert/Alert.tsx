import { GrFormClose } from 'react-icons/gr';

import { FiCheckCircle } from 'react-icons/fi';

import { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { Option } from './Option';

export function Alert({
  onSave,
  onCancel,
  children,
}: {
  onSave: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <>
      <div
        className="overlay fixed top-0 left-0 z-50 h-full w-full bg-black opacity-80"
        onClick={onCancel}
      ></div>
      <div className="fixed top-1/3 left-2 right-2 z-50 m-auto mt-20 flex max-h-96 min-h-min -translate-y-1/2 flex-col items-center justify-center gap-4 rounded-lg bg-white px-8 py-10 shadow-lg">
        <GrFormClose
          className="absolute top-2 right-2"
          size={32}
          onClick={() => onCancel && onCancel()}
        />
        <div className="options flex flex-col gap-3 self-start">{children}</div>
        <PrimaryButton
          text="Done"
          className="w-full px-20 text-center"
          onClick={() => onSave()}
        />
      </div>
    </>
  );
}

export function LanguagesAlert({
  onSave,
  onCancel,
}: {
  onSave: (value: string) => void;
  onCancel?: () => void;
}) {
  const [value, setValue] = useState('');

  return (
    <div className="relative m-auto mt-20 flex w-1/2 flex-col items-center justify-center gap-4 rounded-lg px-20 pt-10 shadow-lg">
      <GrFormClose
        className="absolute top-2 right-2"
        size={20}
        onClick={() => onCancel && onCancel()}
      />
      <div className="options flex flex-col gap-3 self-start">
        <Option
          text="ar"
          value="Arabic"
          selectedValue={value}
          setValue={(value: string) => {
            setValue(value);
          }}
        />
        <Option
          text="English"
          value="English"
          selectedValue={value}
          setValue={(value: string) => {
            setValue(value);
          }}
        />
        <Option
          text="Japanese"
          value="Japanese"
          selectedValue={value}
          setValue={(value: string) => {
            setValue(value);
          }}
        />
      </div>
      <PrimaryButton
        text="Done"
        className="mb-6 w-full px-20 text-center"
        onClick={() => onSave(value)}
      />
    </div>
  );
}

export default Alert;

export interface OptionComponentI {
  text: string;
  value: any;
  setValue: any;
  selectedValue: string;
}

function DoneAlert() {
  return (
    <div className="relative flex w-1/2 flex-col items-center justify-center rounded-lg px-20 pt-10 shadow-lg ">
      <GrFormClose className="absolute top-2 right-2" />
      <FiCheckCircle className="text-5xl font-semibold text-green-500" />
      <span className="text-lg font-semibold">Success</span>
      <span className="mb-4 text-sm text-gray-500">
        Your changes done successfully
      </span>
    </div>
  );
}
