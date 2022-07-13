import React, { useState } from 'react';

import { BiChair, BiServer } from 'react-icons/bi';
import { formatTime } from '../../../utils/formatTime';

const linesDetails = {
  'line 1': {
    title: 'Line 1',
    totalTime: '75 Min',
    lines: 'Helwan - El-Marg',
    startsFrom: '05:00 AM',
    endsAt: '00:00 AM',
    timeBetweenStations: { peakTime: 210, nonPeakTime: 360 },
    numberOfTrains: { regularVentilation: '32', airCondition: '20' },
  },
  'line 2': {
    title: 'Line 1',
    totalTime: '75 Min',
    lines: 'Helwan - El-Marg',
    startsFrom: '05:00 AM',
    endsAt: '00:00 AM',
    timeBetweenStations: { peakTime: 210, nonPeakTime: 360 },
    numberOfTrains: { regularVentilation: '32', airCondition: '20' },
  },
  'line 3': {
    title: 'Line 1',
    totalTime: '75 Min',
    lines: 'Helwan - El-Marg',
    startsFrom: '05:00 AM',
    endsAt: '00:00 AM',
    timeBetweenStations: { peakTime: 210, nonPeakTime: 360 },
    numberOfTrains: { regularVentilation: '32', airCondition: '20' },
  },
};

type lineTitles = 'line 1' | 'line 2' | 'line 3';

export default function LineDetails({ line }: { line: lineTitles }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`my-4 flex flex-col rounded-lg ${
        clicked ? 'shadow-xl' : 'shadow-sm'
      }`}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <Header line={line} />
      {clicked && <Body line={line} />}
    </div>
  );
}

function Header({ line }: { line: lineTitles }) {
  return (
    <div className={`flex flex-col justify-center p-4`}>
      <div className="flex items-center justify-between">
        <span className="text-xl">{linesDetails[line].title}</span>
        <SmallText>{linesDetails[line].lines}</SmallText>
      </div>
      <SmallText>
        Total Time:{' '}
        <SmallText isBold={true}>{linesDetails[line].totalTime}</SmallText>
      </SmallText>
    </div>
  );
}

function Body({ line }: { line: lineTitles }) {
  return (
    <div className="flex flex-col gap-6 rounded p-4">
      <div className="flex flex-col gap-4">
        <LD title="First Transfer">
          <SmallText>
            Starts from{' '}
            <SmallText isBold={true}>{linesDetails[line].startsFrom}</SmallText>
          </SmallText>
        </LD>
        <LD title="Last Transfer">
          <SmallText>
            Ends at{' '}
            <SmallText isBold={true}>{linesDetails[line].endsAt}</SmallText>
          </SmallText>
        </LD>
        <LD title="Time Between Stations (Peek Time)">
          <SmallText>
            {formatTime(linesDetails[line].timeBetweenStations.peakTime)}{' '}
            <SmallText isBold={true}>
              ({linesDetails[line].timeBetweenStations.peakTime} Sec)
            </SmallText>
          </SmallText>
        </LD>
        <LD title="Time Between Stations (Non-Peek Time)">
          <SmallText>
            {formatTime(linesDetails[line].timeBetweenStations.nonPeakTime)}{' '}
            <SmallText isBold={true}>
              ({linesDetails[line].timeBetweenStations.nonPeakTime} Sec)
            </SmallText>
          </SmallText>
        </LD>
      </div>
      <LD title="Number Trains">
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <BiChair />{' '}
            <SmallText>
              Regular Ventilation{' '}
              <SmallText isBold={true}>
                {linesDetails[line].numberOfTrains.regularVentilation}
              </SmallText>
            </SmallText>{' '}
          </div>
          <div className="flex flex-row items-center gap-2">
            <BiServer />
            <SmallText>
              Air-conditioned{' '}
              <SmallText isBold={true}>
                {linesDetails[line].numberOfTrains.airCondition}
              </SmallText>
            </SmallText>
          </div>
        </div>
      </LD>
    </div>
  );
}

function LD(props: any) {
  const {
    title,
    children,
  }: {
    title?: string;
    children: React.ReactNode;
  } = props;

  return (
    <div className="flex flex-col ">
      <span className="text-base text-gray-900">{title}</span>
      <div className="flex gap-1 ">{children}</div>
    </div>
  );
}

const SmallText = ({
  children,
  isBold = false,
}: {
  children: React.ReactNode;
  isBold?: boolean;
}) => {
  return (
    <span className={`text-sm text-gray-500 ${isBold && 'font-bold'}`}>
      {children}
    </span>
  );
};
