import { render } from '@testing-library/react';

import Slide from './slide';

describe('Slide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Slide
        title="slide title content"
        image="https://via.placeholder.com/300/400"
      >
        summary of the post
      </Slide>
    );
    expect(baseElement).toBeTruthy();
  });
});
