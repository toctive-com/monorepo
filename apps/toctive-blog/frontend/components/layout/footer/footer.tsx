import { HTMLCollectionToArray } from '../../../assets/js/HTMLCollectionToArray';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useTranslation } from 'next-i18next';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export function Footer() {
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

  const { t } = useTranslation();

  return (
    <StyledFooter
      className="mt-8 bg-gray-300 p-4 text-center text-sm"
      ref={footerRef}
    >
      <div
        className="mx-auto grid w-full flex-1 grid-cols-2 justify-center gap-y-4 sm:grid-cols-3 md:flex lg:justify-start"
        ref={linksRef}
      >
        <Link href="http://toctive.com/legal/privacy-policy">
          <a className="whitespace-nowrap hover:underline">
            {t('footer.privacyPolicy')}
          </a>
        </Link>
        <span className="mx-4 hidden text-gray-400 md:block"> &middot; </span>
        <Link href="http://toctive.com/legal/terms-of-service">
          <a className="whitespace-nowrap hover:underline">
            {t('footer.termsOfService')}
          </a>
        </Link>
      </div>

      <div ref={copyrightsRef}>
        {new Date().getFullYear().toString()} &copy;{' '}
        <a href="http://toctive.com">{t('toctive')}</a>. {t('footer.copyright')}
      </div>
    </StyledFooter>
  );
}

export default Footer;
