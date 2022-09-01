import { useTranslation } from 'next-i18next';
import { PostI } from '@toctive/toctive-blog';
import { serverSideTranslationsWithNX } from '../../assets/js/serverSideTranslationsWithNX';

// Components
import Link from 'next/link';
import Footer from '../../components/layout/footer/footer';
import Navbar from '../../components/layout/navbar/navbar';
import Posts from '../../components/layout/posts/posts';
import SectionHeader from '../../components/layout/section-header/section-header';
import NavButton from '../../components/shared/nav-button/nav-button';

// Fetch Data
import { getLatestPosts } from '../../data/getLatestPosts';
import { GetServerSidePropsContext } from 'next/types';

export interface IndexProps {
  latestPosts: PostI[];
}

export function Index({ latestPosts }: IndexProps) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="wrapper">
        <Navbar shadow />

        <div className="mt-32">
          <SectionHeader title="The Latest Posts">
            If you want to read articles from specific category got to{' '}
            <Link href={'/categories'} passHref>
              <a>/categories</a>
            </Link>
            <br />
            {t('latestArticleSubtitle')}{' '}
            <Link href={'/posts'} passHref>
              <a dir="auto">/posts</a>
            </Link>
          </SectionHeader>

          <Posts posts={latestPosts} />
          <NavButton title="Show All Articles" href="/posts">
            {t('showAllArticles')}
          </NavButton>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Index;

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  let latestPosts: PostI[] = [];
  await Promise.all([
    getLatestPosts({}).then((res) => {
      latestPosts = res;
      return res;
    }),
  ]);

  return {
    props: {
      ...(await serverSideTranslationsWithNX({
        initialLocale: locale,
        // namespacesRequired: ['common'],
      })()),
      latestPosts,
    },
  };
};
