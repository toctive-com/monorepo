import { PostI } from '@toctive/toctive-blog';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import styled from 'styled-components';

import Footer from '../../components/layout/footer/footer';
import Navbar from '../../components/layout/navbar/navbar';
import Time from '../../components/shared/time/time';

import { getPostById } from '../../data/getPostById';

export interface PostIdProps {
  post: PostI;
  mdxSource: MDXRemoteProps;
}

interface StyledCoverProps {
  src?: string;
  [x: string]: unknown;
}

const StyledPostPage = styled.div``;
const StyledCover = styled.div`
  background-image: radial-gradient(
      circle,
      rgba(48, 31, 9, 0) 0%,
      rgba(222, 199, 154, 0.5) 100%
    ),
    url(${(props: StyledCoverProps) => props.src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100vh;
`;

export function PostId({ post, mdxSource }: PostIdProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        {post.summary && <meta name="description" content={post.summary} />}
      </Head>
      <StyledPostPage>
        <div className="wrapper">
          <div className="relative mb-8 h-[32rem] w-full overflow-hidden">
            <Navbar shadow />
            <StyledCover src={post.thumbnail || ''} />
          </div>

          <div className="rtl:font-tajawal container mx-auto min-h-screen max-w-5xl px-2 font-sans text-xl !leading-loose sm:px-4 md:px-6">
            <div className="text-center text-sm md:text-lg">
              Published <Time time={post.createdAt}></Time>
            </div>
            <h1 className="my-8 text-center text-2xl font-semibold md:text-4xl md:font-bold">
              {post.title}
            </h1>
            {post.summary && (
              <div className="my-4 text-center text-base leading-relaxed md:text-lg md:leading-normal">
                {post.summary}
              </div>
            )}

            {post.thumbnail && (
              <div className="relative my-8 h-full w-full overflow-hidden rounded">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.thumbnail} alt={post.title} className="w-full" />
              </div>
            )}

            <div className="text-base leading-loose md:text-xl md:leading-loose">
              {mdxSource && <MDXRemote {...mdxSource} />}
            </div>
          </div>
          <Footer />
        </div>
      </StyledPostPage>
    </>
  );
}

export default PostId;

/**
 * Fetches the post from the database, and then returns the post and
 * the MDX source
 *
 * @param {GetServerSidePropsContext} context - GetServerSidePropsContext
 * @returns The post and mdxSource are being returned.
 */
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.params;
  if (!params) return { notFound: true };

  const postId = params['post-id'] as string;
  if (!postId) return { notFound: true };

  const post: PostI | null = await getPostById({ id: postId });
  if (!post) return { notFound: true };

  const mdxSource = await serialize(post.content, {
    parseFrontmatter: true,
    scope: { product: 'next' },
  });

  return {
    props: {
      post,
      mdxSource,
    },
  };
};
