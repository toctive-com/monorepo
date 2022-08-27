import gsap from 'gsap';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Link from 'next/link';

import { HTMLCollectionToArray } from '../../../assets/js/HTMLCollectionToArray';
export interface NavbarProps {
  transparent?: boolean;
  shadow?: boolean;
}

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const AuthLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  margin-inline: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem /* 4px */;
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
`;

const TagLink = styled.a`
  cursor: pointer;
  padding: 1rem;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand: any = styled.a`
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
`;

export function Navbar(props: NavbarProps) {
  const linksRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const authButtonsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!linksRef.current || !brandRef.current || !authButtonsRef.current) {
      return;
    }

    gsap.from(
      [
        brandRef.current,
        ...HTMLCollectionToArray(linksRef.current.children),
        ...HTMLCollectionToArray(authButtonsRef.current.children),
      ],
      {
        duration: 1,
        opacity: 0,
        ease: 'power3.inOut',
        stagger: 0.1,
      }
    );
  }, []);

  const { t } = useTranslation('common');
  return (
    <div
      /* hide the shadow when the navbar is transparent*/
      className={`${props.shadow && 'shadow'} ${
        props.transparent ? 'bg-transparent' : 'bg-gray-50 dark:bg-gray-900'
      }`}
    >
      <StyledNavbar className={`container mx-auto flex-col md:flex-row`}>
        <Row className="flex-col md:flex-row">
          <Link href="/" passHref>
            <Brand className="text-gray-900 dark:text-gray-50" ref={brandRef}>
              {t('navbar.brand')}
            </Brand>
          </Link>

          <div
            id="nav-links"
            className="flex justify-evenly md:mx-8"
            ref={linksRef}
          >
            <Link href="/tags/development" passHref>
              <TagLink className="text-gray-900 dark:text-gray-50">
                {t('navbar.categories.development')}
              </TagLink>
            </Link>
            <Link href="/tags/freelancing" passHref>
              <TagLink className="text-gray-900 dark:text-gray-50">
                {t('navbar.categories.freelancing')}
              </TagLink>
            </Link>
            <Link href="/tags/design" passHref>
              <TagLink className="text-gray-900 dark:text-gray-50">
                {t('navbar.categories.design')}
              </TagLink>
            </Link>
          </div>
        </Row>

        <div id="auth-links" className="hidden md:block" ref={authButtonsRef}>
          {/* <AuthLink href="/login" className="text-gray-900 dark:text-gray-50">
            Login
          </AuthLink>
          <AuthLink
            href="/register"
            className="border text-gray-900 dark:border-white dark:text-gray-50"
          >
            Register
          </AuthLink> */}
        </div>
      </StyledNavbar>
    </div>
  );
}

export default Navbar;
