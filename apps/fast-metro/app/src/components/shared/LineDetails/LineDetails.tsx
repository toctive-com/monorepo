import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BiChair, BiServer } from 'react-icons/bi';
import { formatTime } from '../../../utils/formatTime';

type lineTitles = 'line 1' | 'line 2' | 'line 3';

export default function LineDetails({ line }: { line: lineTitles }) {
  const [clicked, setClicked] = useState(false);
  const { t } = useTranslation();

  const linesDetails = {
    'line 1': {
      title: t(`metro-schedules-screen.line-1`),
      totalTime: '75',
      lines: `${t('stations.helwan')} - ${t('stations.el-marg')}`,
      startsFrom: '05:00 AM',
      endsAt: '00:00 AM',
      timeBetweenStations: { peakTime: 210, nonPeakTime: 360 },
      numberOfTrains: { regularVentilation: '32', airCondition: '20' },
    },
    'line 2': {
      title: t(`metro-schedules-screen.line-2`),
      totalTime: '38',
      lines: `${t('stations.shubra-el-kheima')} - ${t('stations.el-marg')}`,
      startsFrom: '05:00 AM',
      endsAt: '00:00 AM',
      timeBetweenStations: { peakTime: 165, nonPeakTime: 360 },
      numberOfTrains: { regularVentilation: '35', airCondition: '4' },
    },
    'line 3': {
      title: t(`metro-schedules-screen.line-3`),
      totalTime: '37',
      lines: `${t('stations.adly_mansour')} - ${t('stations.attaba')}`,
      startsFrom: '05:00 AM',
      endsAt: '00:00 AM',
      timeBetweenStations: { peakTime: 300, nonPeakTime: 420 },
      numberOfTrains: { regularVentilation: '0', airCondition: '15' },
    },
  };

  function Header({ line }: { line: lineTitles }) {
    return (
      <div className={`flex flex-col justify-center p-4`}>
        <div className="flex items-center justify-between">
          <span className="text-xl">{linesDetails[line].title}</span>

          <SmallText>{linesDetails[line].lines}</SmallText>
        </div>
        <SmallText>
          {t(`metro-schedules-screen.header.total-time`)}{' '}
          <SmallText isBold={true}>
            {linesDetails[line].totalTime}{' '}
            {t(`metro-schedules-screen.header.minute`)}
          </SmallText>
        </SmallText>
      </div>
    );
  }

  function Body({ line }: { line: lineTitles }) {
    return (
      <div className="flex flex-col gap-6 rounded p-4">
        <div className="flex flex-col gap-4">
          <LD title={t('metro-schedules-screen.body.first-transfer.title')}>
            <SmallText>
              {t('metro-schedules-screen.body.starts-from')}{' '}
              <SmallText isBold={true}>
                <span dir="auto">{linesDetails[line].startsFrom}</span>
              </SmallText>
            </SmallText>
          </LD>
          <LD title={t('metro-schedules-screen.body.last-transfer.title')}>
            <SmallText>
              {t('metro-schedules-screen.body.ends-from')}{' '}
              <SmallText isBold={true}>
                <span dir="auto">{linesDetails[line].endsAt}</span>
              </SmallText>
            </SmallText>
          </LD>
          <LD
            title={t(
              'metro-schedules-screen.body.time-between-stations-peek-time.title'
            )}
          >
            <SmallText>
              <span dir="auto">
                {formatTime(linesDetails[line].timeBetweenStations.peakTime)}
              </span>
              {' = '}
              <SmallText isBold={true}>
                {linesDetails[line].timeBetweenStations.peakTime}{' '}
                {t('metro-schedules-screen.body.second')}
              </SmallText>
            </SmallText>
          </LD>
          <LD
            title={t(
              'metro-schedules-screen.body.time-between-stations-non-peek-time.title'
            )}
          >
            <SmallText>
              <span dir="auto">
                {formatTime(linesDetails[line].timeBetweenStations.nonPeakTime)}
              </span>
              {' = '}
              <SmallText isBold={true}>
                {linesDetails[line].timeBetweenStations.nonPeakTime}{' '}
                {t('metro-schedules-screen.body.second')}
              </SmallText>
            </SmallText>
          </LD>
        </div>
        <LD title={t('metro-schedules-screen.body.number-trains.title')}>
          <div className="flex w-full flex-row justify-around">
            <div className="flex flex-row items-center gap-2">
              <BiChair />{' '}
              <SmallText>
                <SmallText isBold={true}>
                  {linesDetails[line].numberOfTrains.regularVentilation}
                </SmallText>{' '}
                {t(
                  'metro-schedules-screen.body.number-trains.regular-ventilation'
                )}
              </SmallText>{' '}
            </div>
            <div className="flex flex-row items-center gap-2">
              <BiServer />
              <SmallText>
                <SmallText isBold={true}>
                  {linesDetails[line].numberOfTrains.airCondition}
                </SmallText>{' '}
                {t('metro-schedules-screen.body.number-trains.air-conditioned')}{' '}
              </SmallText>
            </div>
          </div>
        </LD>
      </div>
    );
  }

  return (
    <div
      className={`my-4 flex flex-col rounded-lg border ${
        clicked
          ? 'border-gray-300 shadow-xl dark:border-gray-700'
          : 'border-gray-200 shadow-sm dark:border-gray-800'
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
      <span className="text-base text-gray-900 dark:text-gray-50">{title}</span>
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
    <span
      className={`text-sm text-gray-500 dark:text-gray-400 ${
        isBold && 'font-bold'
      }`}
    >
      {children}
    </span>
  );
};
