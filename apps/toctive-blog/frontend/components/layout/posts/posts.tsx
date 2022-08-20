import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Post, { PostI } from '../../shared/post/post';

const StyledPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
`;

export function Posts({ posts }: { posts: PostI[] }) {
  // Animate the posts in
  const postsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // check if postsRef is null first
    if (!postsRef.current) return;

    // when every post is in view, animate it in
    gsap.from(postsRef.current?.children, {
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.15,
      opacity: 0,
      y: 30,
      filter: 'grayscale(100%) blur(2px)',
      scrollTrigger: {
        trigger: postsRef.current,
        start: 'top 75%',
      },
    });
  }, []);

  return (
    <StyledPosts className="container mx-auto" ref={postsRef}>
      {posts.map((post, index) => (
        <Post post={post} key={post.id || `post-${index}`} />
      ))}
    </StyledPosts>
  );
}

export default Posts;
