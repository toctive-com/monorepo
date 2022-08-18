import { render } from '@testing-library/react';

import Time from './time';

describe('Time', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Time time={new Date(Date.now())} />);
    expect(baseElement).toBeTruthy();
  });
});
