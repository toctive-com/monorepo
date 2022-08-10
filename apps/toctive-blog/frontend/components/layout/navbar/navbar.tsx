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
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#fff')};
`;

const AuthLink = styled.a`
  color: ${(props) => (props.theme === 'dark' ? '#f00' : '#000')};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin-inline: 1rem;
  &:hover {
    color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.a`
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  }
`;

export function Navbar(props: NavbarProps) {
  return (
    <StyledNavbar
      className={`flex-col shadow md:flex-row ${
        props.transparent ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <Row className="flex-col md:flex-row">
        <Brand>Toctive Blog</Brand>

        <div id="nav-links" className="flex justify-evenly md:mx-8">
          <Link href="/tags/development">
            <span className="cursor-pointer p-4 text-gray-900 hover:underline hover:underline-offset-8 dark:text-gray-50">
              Development
            </span>
          </Link>
          <Link href="/tags/freelancing">
            <span className="cursor-pointer p-4 text-gray-900 hover:underline hover:underline-offset-8 dark:text-gray-50">
              Freelancing
            </span>
          </Link>
          <Link href="/tags/design">
            <span className="cursor-pointer p-4 text-gray-900 hover:underline hover:underline-offset-8 dark:text-gray-50">
              Design
            </span>
          </Link>
        </div>
      </Row>

      <div id="auth-links">
        <AuthLink href="/login">Login</AuthLink>
        <AuthLink href="/register">Register</AuthLink>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
