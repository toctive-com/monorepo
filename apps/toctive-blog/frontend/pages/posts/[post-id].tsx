import { PostI } from '@toctive/toctive-blog';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import styled from 'styled-components';

import Footer from '../../components/layout/footer/footer';
import Navbar from '../../components/layout/navbar/navbar';

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
    <StyledPostPage>
      <div className="wrapper">
        <div className="relative mb-8 h-[32rem] w-full overflow-hidden">
          <Navbar shadow />
          <StyledCover src={post.thumbnail || ''} />
        </div>

        <div className="container mx-auto min-h-screen">
          <h1 className="text-center text-3xl font-semibold">{post.title}</h1>
          {mdxSource && <MDXRemote {...mdxSource} />}
        </div>
        <Footer />
      </div>
    </StyledPostPage>
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
