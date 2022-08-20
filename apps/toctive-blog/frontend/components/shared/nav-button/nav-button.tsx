import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export interface NavButtonProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  title?: string;
}
const Container = styled.div``;
export function NavButton(props: NavButtonProps) {
  return (
    <Container className={props.className || ''} ref={props.ref || null}>
      <Link href={props.href || '/'} passHref>
        <a
          title={props.title}
          className="mx-auto flex w-fit rounded border border-transparent px-4 py-2 text-gray-800 transition-all hover:border-gray-800 disabled:cursor-not-allowed disabled:border-0 disabled:text-gray-300 disabled:opacity-25"
        >
          {props.children && props.children}
        </a>
      </Link>
    </Container>
  );
}

export default NavButton;
