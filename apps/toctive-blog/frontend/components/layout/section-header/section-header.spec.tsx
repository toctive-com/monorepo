import { render } from '@testing-library/react';
import SectionHeader from './section-header';

describe('SectionHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SectionHeader title="Hello World">Some Content</SectionHeader>
    );

    expect(baseElement).toBeTruthy();

    const excepted = 'Hello World';
    const actual = baseElement?.querySelector('h3')?.textContent;

    expect(excepted).toEqual(actual);
  });
});
