import { render } from '@testing-library/react';
import Post from './post';

describe('Post', () => {
  it('should render successfully', () => {
    const post = {
      id: 'c',
      title: 'third Post',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum!',

      author: 'Sameh Ashraf',
      thumbnail: 'https://s3.envato.com/files/380533636/01_Preview.png',
      createdAt: new Date(1660611048713),
    };
    const { baseElement } = render(<Post post={post} />);
    expect(baseElement).toBeTruthy();
  });
});
