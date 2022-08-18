import { render } from '@testing-library/react';
import Slide from '../../shared/slide/slide';

import Slider from './slider';

describe('Slider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Slider>
        <Slide
          title="stock futures are flat ahead"
          image="https://s3.envato.com/files/380533636/01_Preview.png"
        >
          123 123
        </Slide>
      </Slider>
    );
    expect(baseElement).toBeTruthy();
  });
});
