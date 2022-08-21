import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg';
import styled from 'styled-components';
import Footer from '../components/layout/footer/footer';
import Navbar from '../components/layout/navbar/navbar';
import Posts from '../components/layout/posts/posts';
import SectionHeader from '../components/layout/section-header/section-header';
import Slider from '../components/layout/slider/slider';
import NavButton from '../components/shared/nav-button/nav-button';
import { PostI } from '../components/shared/post/post';
import Slide from '../components/shared/slide/slide';

const StyledPage = styled.div``;

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

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="dark">
          <Navbar shadow />

          <Slider>
            <Slide
              title="stock futures are flat ahead"
              image="https://s3.envato.com/files/380533636/01_Preview.png"
            >
              123 123
            </Slide>
            <Slide
              title="stock futures are flat ahead"
              image="https://s3.envato.com/files/380533636/01_Preview.png"
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus non deserunt incidunt. Reprehenderit sit beatae,
                impedit excepturi rem libero, debitis corporis inventore
                corrupti harum aspernatur eius labore ipsam deleniti nulla?
              </p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>
                  by <strong>Sameh Ashraf</strong> &middot;{' '}
                  <time dateTime="2020-01-01">January 1, 2020</time>
                </span>
                <CgArrowLongRight className="h-8 w-10 cursor-pointer pr-4 text-gray-400 transition-all hover:pr-0 hover:pl-4 hover:text-gray-900" />
              </div>
            </Slide>
            <Slide
              title="stock futures are flat ahead"
              image="https://via.placeholder.com/300"
            >
              456
            </Slide>
          </Slider>

          <div className="mt-32">
            <SectionHeader title="The Latest Posts">
              If you want to read articles from specific category got to{' '}
              <Link href={'/categories'} passHref>
                <a>/categories</a>
              </Link>
              <br />
              To read all articles go to{' '}
              <Link href={'/posts'} passHref>
                <a>/posts</a>
              </Link>
            </SectionHeader>

            <Posts posts={posts} />
            <NavButton title="Show All Articles" href="/posts">
              Show All Articles
            </NavButton>
          </div>

          <div className="mt-32">
            <SectionHeader title="The Latest Posts">
              If you want to read articles from specific category got to{' '}
              <Link href={'/categories'} passHref>
                <a>/categories</a>
              </Link>
              <br />
              To read all articles go to{' '}
              <Link href={'/posts'} passHref>
                <a>/posts</a>
              </Link>
            </SectionHeader>

            <Posts posts={posts} />
            <NavButton title="Show All Articles" href="/posts">
              Show All Articles
            </NavButton>
          </div>

          <Footer />
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
