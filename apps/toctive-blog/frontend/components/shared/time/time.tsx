import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/* eslint-disable-next-line */
export interface TimeProps {
  time: Date;
}

/* A React component that displays a time in a human readable format. */
export function Time(props: TimeProps) {
  const [clicked, setClicked] = useState<boolean>(true);
  const [time, setTime] = useState<string | Date>('');

  const timeRef = useRef<HTMLTimeElement>(null);
  useEffect(() => {
    if (!timeRef.current) return;

    gsap.from(timeRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  }, [clicked]);

  useEffect(() => {
    const newTime = !clicked
      ? moment(props.time, 'YYYYMMDD').local(true).fromNow()
      : moment(props.time, 'YYYYMMDD').local(true).format('MMMM Do YYYY');
    setTime(newTime);
  }, [clicked, props.time]);

  return (
    <time
      ref={timeRef}
      dateTime={props.time.toDateString()}
      // title={
      //   !clicked
      //     ? moment(props.time, 'YYYYMMDD').fromNow()
      //     : moment(props.time, 'YYYYMMDD').format('MMMM Do YYYY')
      // }
      onClick={() => setClicked(!clicked)}
      className="cursor-pointer select-none"
    >
      {time.toString()}
    </time>
  );
}

export default Time;
