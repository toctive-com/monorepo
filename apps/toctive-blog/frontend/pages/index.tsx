import { useDirection } from '@toctive/react-utils';
import { PostI } from '@toctive/toctive-blog';
import { useTranslation } from 'next-i18next';
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';

import { serverSideTranslationsWithNX } from '../assets/js/serverSideTranslationsWithNX';

// Home Page Components
import Link from 'next/link';
import Footer from '../components/layout/footer/footer';
import Navbar from '../components/layout/navbar/navbar';
import Posts from '../components/layout/posts/posts';
import SectionHeader from '../components/layout/section-header/section-header';
import Slider from '../components/layout/slider/slider';
import NavButton from '../components/shared/nav-button/nav-button';
import Slide from '../components/shared/slide/slide';

// Fetch Data
import { getLatestPosts } from '../data/getLatestPosts';
import Time from '../components/shared/time/time';
import { GetServerSidePropsContext } from 'next/types';

export function Index({ latestPosts }: { latestPosts: PostI[] }) {
  const [direction] = useDirection();
  const { t } = useTranslation('common');

  return (
    <div>
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
                <div className="flex justify-evenly">
                  <span>
                    {t('slider.by')} <strong>Sameh Ashraf</strong>{' '}
                  </span>
                  <span className="mx-2">&middot;</span>
                  <Time
                    time={
                      new Date(
                        'Sat Aug 27 2022 23:18:57 GMT+0200 (Eastern European Standard Time)'
                      )
                    }
                  />
                </div>

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
                <SectionHeader title={t('latestArticles.title')}>
                  {t('latestArticles.subtitle')}{' '}
                  <Link href={'/posts'} passHref>
                    <a dir="auto">{t('latestArticles.postsPage')}</a>
                  </Link>
                </SectionHeader>

                <Posts posts={latestPosts} />
                <NavButton title={t('showAllArticles')} href="/posts">
                  {t('showAllArticles')}
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
            <NavButton title={t('showAllArticles')} href="/posts">
              {t('showAllArticles')}
            </NavButton>
          </div>

          <Footer />
        </div>
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
        // namespacesRequired: ['common', 'home'],
      })()),
      latestPosts,
    },
  };
};
