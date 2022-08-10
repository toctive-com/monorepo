import Link from 'next/link';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavbarProps {
  transparent?: boolean;
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

const TagLink = styled.span`
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
      className={`${!props.transparent && 'shadow'}`}
    >
      <StyledNavbar
        className={`container flex-col md:flex-row ${
          props.transparent ? 'bg-transparent' : 'bg-white'
        }`}
      >
        <Row className="flex-col md:flex-row">
          <Brand className="text-gray-900 dark:text-gray-50">
            Toctive Blog
          </Brand>

          <div id="nav-links" className="flex justify-evenly md:mx-8">
            <Link href="/tags/development">
              <TagLink className="text-gray-900 dark:text-gray-50">
                Development
              </TagLink>
            </Link>
            <Link href="/tags/freelancing">
              <TagLink className="text-gray-900 dark:text-gray-50">
                Freelancing
              </TagLink>
            </Link>
            <Link href="/tags/design">
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
