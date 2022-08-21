import { HTMLCollectionToArray } from '../../../assets/js/HTMLCollectionToArray';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    /* display: grid; */
    flex-direction: column;
    gap: 1rem;
  }
`;

export function Footer(props: FooterProps) {
  // animate the links and copyright statement on scroll
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const copyrightsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!linksRef.current || !copyrightsRef.current || !footerRef.current) {
      return;
    }

    gsap.from(
      [
        ...HTMLCollectionToArray(linksRef.current.children),
        copyrightsRef.current,
      ],
      {
        duration: 1,
        opacity: 0,
        y: 10,
        ease: 'power3.inOut',
        stagger: 0.025,
        scrollTrigger: footerRef.current,
      }
    );
  }, []);

  return (
    <StyledFooter
      className="mt-8 bg-gray-300 p-4 text-center text-sm"
      ref={footerRef}
    >
      <div
        className="mx-auto grid w-full flex-1 grid-cols-2 justify-center gap-y-4 sm:grid-cols-3 md:flex lg:justify-start"
        ref={linksRef}
      >
        <Link href="toctive.com/legal/privacy-policy">
          <a className="whitespace-nowrap hover:underline">Privacy Policy</a>
        </Link>
        <span className="mx-4 hidden text-gray-400 md:block"> &middot; </span>
        <Link href="toctive.com/legal/terms-of-service">
          <a className="whitespace-nowrap hover:underline">Terms of Service</a>
        </Link>
        <span className="mx-4 hidden text-gray-400 md:block"> &middot; </span>
        <Link href="toctive.com/legal/terms-of-service">
          <a className="whitespace-nowrap hover:underline">Terms of Service</a>
        </Link>
        <span className="mx-4 hidden text-gray-400 md:block"> &middot; </span>
        <Link href="toctive.com/legal/terms-of-service">
          <a className="whitespace-nowrap hover:underline">Terms of Service</a>
        </Link>
      </div>

      <div ref={copyrightsRef}>
        &copy; {new Date().getFullYear().toString()}{' '}
        <a href="http://toctive.com">Toctive</a>. All rights reserved
      </div>
    </StyledFooter>
  );
}

export default Footer;
