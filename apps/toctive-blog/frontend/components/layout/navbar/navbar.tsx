import Link from 'next/link';
import styled from 'styled-components';

/* eslint-disable-next-line */
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

const Brand = styled.a`
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
`;

// TODO: add theme support (dark/light)
export function Navbar(props: NavbarProps) {
  return (
    <div
      /* hide the shadow when the navbar is transparent*/
      className={`${props.shadow && 'shadow'}`}
    >
      <StyledNavbar
        className={`container mx-auto flex-col md:flex-row ${
          props.transparent ? 'bg-transparent' : 'bg-gray-50'
        }`}
      >
        <Row className="flex-col md:flex-row">
          <Link href="/" passHref>
            <Brand className="text-gray-900 dark:text-gray-50">
              Toctive Blog
            </Brand>
          </Link>

          <div id="nav-links" className="flex justify-evenly md:mx-8">
            <Link href="/tags/development" passHref>
              <TagLink className="text-gray-900 dark:text-gray-50">
                Development
              </TagLink>
            </Link>
            <Link href="/tags/freelancing" passHref>
              <TagLink className="text-gray-900 dark:text-gray-50">
                Freelancing
              </TagLink>
            </Link>
            <Link href="/tags/design" passHref>
              <TagLink className="text-gray-900 dark:text-gray-50">
                Design
              </TagLink>
            </Link>
          </div>
        </Row>

        <div id="auth-links" className="hidden md:block">
          <AuthLink href="/login" className="text-gray-900 dark:text-gray-50">
            Login
          </AuthLink>
          <AuthLink
            href="/register"
            className="border text-gray-900 dark:border-white dark:text-gray-50"
          >
            Register
          </AuthLink>
        </div>
      </StyledNavbar>
    </div>
  );
}

export default Navbar;
