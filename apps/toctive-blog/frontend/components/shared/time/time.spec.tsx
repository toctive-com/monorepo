import { render } from '@testing-library/react';

import Time from './time';

describe('Time', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Time />);
    expect(baseElement).toBeTruthy();
  });
});
