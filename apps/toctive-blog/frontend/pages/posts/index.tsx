import Link from 'next/link';
import styled from 'styled-components';
import Footer from '../../components/layout/footer/footer';
import Navbar from '../../components/layout/navbar/navbar';
import Posts from '../../components/layout/posts/posts';
import SectionHeader from '../../components/layout/section-header/section-header';
import NavButton from '../../components/shared/nav-button/nav-button';
import { PostI } from '@toctive/toctive-blog';
import { getLatestPosts } from '../../data/getLatestPosts';

/* eslint-disable-next-line */
export interface IndexProps {
  latestPosts: PostI[];
}

const StyledIndex = styled.div``;

export function Index({ latestPosts }: IndexProps) {
  return (
    <StyledIndex>
      <div className="wrapper">
        <Navbar shadow />

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
    </StyledIndex>
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
