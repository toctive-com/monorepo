import { PostI } from '@toctive/toctive-blog';
import gsap from 'gsap';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Components
import { useDirection } from '@toctive/react-utils';
import Link from 'next/link';
import Time from '../time/time';

export function Post({ post }: { post: PostI }) {
  // Animate the posts in and remove animation styles when they're done
  const thumbnailRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    gsap.from(thumbnailRef.current, {
      duration: 1,
      ease: 'power2.inOut',
      opacity: 0,
      y: 30,
      filter: 'grayscale(100%) blur(2px)',
      onComplete: function () {
        gsap.set(this.targets(), { clearProps: 'all' });
      },
    });
  }, []);

  const [direction] = useDirection();
  const { t } = useTranslation();

  return (
    <div className="relative w-full p-4 md:p-8 lg:w-1/2">
      <Link href={`/posts/${post.id}`} passHref>
        <a>
          <div className="overflow-hidden ">
            {/* eslint-disable-next-line */}
            <img
              src={post.thumbnail}
              alt={post.title}
              className="h-96 w-full overflow-hidden rounded object-cover transition-all duration-500 hover:scale-125"
              ref={thumbnailRef}
            />
          </div>
        </a>
      </Link>

      <div className="my-4">
        <Time time={post.createdAt}></Time> &middot; {t('posts.by')}{' '}
        <strong>{post.author}</strong>
      </div>

      <Link href={`/posts/${post.id}`} passHref>
        <a>
          <h2 className="mt-2 text-2xl font-bold capitalize md:mt-4">
            {post.title.toLowerCase()}
          </h2>
        </a>
      </Link>

      <p className="text-justify" title={post.content}>
        {substring(post.content, 300)}
      </p>

      <div className="my-4 font-medium uppercase md:my-8">
        <Link href={`/posts/${post.id}`} passHref>
          <a className="group flex items-center gap-4 underline-offset-8 transition-all hover:gap-8 hover:underline">
            {t('readArticle')}{' '}
            {direction === 'rtl' ? (
              <BsArrowLeft className="opacity-0 transition-all group-hover:opacity-100" />
            ) : (
              <BsArrowRight className="opacity-0 transition-all group-hover:opacity-100" />
            )}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Post;

function substring(str: string, length = 300): string {
  if (str.length > length) return str.substring(0, length) + ' ...';
  return str;
}
