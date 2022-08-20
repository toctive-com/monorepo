import { render } from '@testing-library/react';
import { PostI } from '../../shared/post/post';
import Posts from './posts';

const posts: PostI[] = [
  {
    id: 'a',
    title: 'First Post',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    author: 'Sameh Ashraf',
    thumbnail: 'https://s3.envato.com/files/380533636/01_Preview.png',
    createdAt: new Date(1660683048713),
  },
  {
    id: 'b',
    title: 'Second Post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum!',

    author: 'Sameh Ashraf',
    thumbnail: 'https://s3.envato.com/files/380533636/01_Preview.png',
    createdAt: new Date(1660183908713),
  },
  {
    id: 'c',
    title: 'third Post',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta praesentium dolorem amet ratione suscipit repellat, ipsam consectetur debitis, est accusantium ad nihil modi necessitatibus voluptatibus? Illum commodi id similique rerum!',

    author: 'Sameh Ashraf',
    thumbnail: 'https://s3.envato.com/files/380533636/01_Preview.png',
    createdAt: new Date(1660611048713),
  },
];

describe('Posts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Posts posts={posts} />);
    expect(baseElement).toBeTruthy();
  });
});
