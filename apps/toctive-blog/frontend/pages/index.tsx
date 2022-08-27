import { useDirection } from '@toctive/react-utils';
import { PostI } from '@toctive/toctive-blog';
import Link from 'next/link';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import styled from 'styled-components';
import Footer from '../components/layout/footer/footer';
import Navbar from '../components/layout/navbar/navbar';
import Posts from '../components/layout/posts/posts';
import SectionHeader from '../components/layout/section-header/section-header';
import Slider from '../components/layout/slider/slider';
import NavButton from '../components/shared/nav-button/nav-button';
import Slide from '../components/shared/slide/slide';
import { getLatestPosts } from '../data/getLatestPosts';

const StyledPage = styled.div``;

export function Index({ latestPosts }: { latestPosts: PostI[] }) {
  const [direction] = useDirection();

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
              <div className="mt-4 flex justify-between text-xs text-gray-500 sm:text-sm">
                <span>
                  by <strong>Sameh Ashraf</strong> &middot;{' '}
                  <time dateTime="2020-01-01">January 1, 2020</time>
                </span>

                {direction === 'rtl' ? (
                  <CgArrowLongLeft className="h-8 w-10 cursor-pointer text-gray-400 transition-all hover:text-gray-900 ltr:pr-4 hover:ltr:pr-0 hover:ltr:pl-4 rtl:pl-4 hover:rtl:pl-0 hover:rtl:pr-4" />
                ) : (
                  <CgArrowLongRight className="h-8 w-10 cursor-pointer text-gray-400 transition-all hover:text-gray-900 ltr:pr-4 hover:ltr:pr-0 hover:ltr:pl-4 rtl:pl-4 hover:rtl:pl-0 hover:rtl:pr-4" />
                )}
              </div>
            </Slide>
            <Slide
              title="stock futures are flat ahead"
              image="https://via.placeholder.com/300"
            >
              456
            </Slide>
          </Slider>

          {latestPosts && (
            <>
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

                <Posts posts={latestPosts} />
                <NavButton title="Show All Articles" href="/posts">
                  Show All Articles
                </NavButton>
              </div>
            </>
          )}

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

            <Posts posts={latestPosts} />
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

export const getServerSideProps = async () => {
  let latestPosts: PostI[] = [];
  await Promise.all([
    getLatestPosts({}).then((res) => {
      latestPosts = res;
      return res;
    }),
  ]);

  return {
    props: {
      latestPosts,
    },
  };
};
