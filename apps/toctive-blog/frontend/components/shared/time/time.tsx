import gsap from 'gsap';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';

/* eslint-disable-next-line */
export interface TimeProps {
  time: Date;
}

/**
 * A React component that displays a time in a human readable format.
 * if use clicked on the time it will change format:
 * - "a few seconds ago"  to "August 18th 2022"
 * - "August 18th 2022" to "a few seconds ago"
 *
 * @param {time: Date}. The time to display.
 */
export function Time(props: TimeProps) {
  // Used to change the time format.
  const [isClicked, setIsClicked] = useState<boolean>(true);

  // the time to display.
  const [time, setTime] = useState<string>('');

  // animate changing the time format.
  const timeRef = useRef<HTMLTimeElement>(null);
  useEffect(() => {
    if (!timeRef.current) return;

    gsap.fromTo(
      timeRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      },
      {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      }
    );
  }, [isClicked]);

  useEffect(() => {
    const newTime = !isClicked
      ? moment(props.time, 'YYYYMMDD').local(true).fromNow()
      : moment(props.time, 'YYYYMMDD').local(true).format('Do MMMM YYYY');
    setTime(newTime);
  }, [isClicked, props.time]);

  return (
    <time
      ref={timeRef}
      dateTime={props.time.toString()}
      // The title attribute is used by screen readers and on hover the time element.
      // it should display the other time format.
      title={time}
      onClick={() => setIsClicked(!isClicked)}
      className="cursor-pointer select-none"
    >
      {time.toString()}
    </time>
  );
}

export default Time;
