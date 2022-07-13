import { GrFormClose } from 'react-icons/gr';

import { FiCheckCircle } from 'react-icons/fi';

import { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function Alert({
  onSave,
  onCancel,
}: {
  onSave: (value: string) => void;
  onCancel?: () => void;
}) {
  const [value, setValue] = useState('');

  return (
    // <DoneAlert/>

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

interface OptionComponentI {
  text: string;
  value: any;
  setValue: any;
  selectedValue: string;
}

function Option({ text, value, setValue, selectedValue }: OptionComponentI) {
  return (
    <div
      className="flex cursor-pointer select-none items-center gap-4"
      onClick={() => {
        setValue(value);
      }}
    >
      <div
        className={`h-4 w-4 rounded-full border-2 
                    ${
                      value === selectedValue
                        ? 'border-gray-400 bg-blue-500'
                        : 'border-blue-500 '
                    }
                `}
      ></div>
      <span>{text}</span>
    </div>
  );
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
