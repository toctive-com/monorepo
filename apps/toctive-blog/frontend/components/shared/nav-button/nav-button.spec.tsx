import { render } from '@testing-library/react';

import NavButton from './nav-button';

describe('NavButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavButton />);
    expect(baseElement).toBeTruthy();
  });
});
