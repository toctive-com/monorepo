import { fireEvent, render, screen } from '@testing-library/react';
import moment from 'moment';

import Time from './time';

describe('Time', () => {
  it('should render successfully', () => {
    const time = new Date(Date.now());

    const { baseElement } = render(<Time time={time} />);
    expect(baseElement).toBeTruthy();
  });

  it('should change time format successfully', () => {
    const time = new Date(Date.now());
    const defaultTimeFormat = moment(time, 'YYYYMMDD').fromNow();
    const MomentTimeFormat = moment(time, 'YYYYMMDD').format('MMMM Do YYYY');

    const { baseElement } = render(<Time time={time} />);
    expect(baseElement.textContent).toEqual(MomentTimeFormat);

    fireEvent.click(screen.getByText(MomentTimeFormat));
    expect(baseElement.textContent).toEqual(defaultTimeFormat);
  });
});
