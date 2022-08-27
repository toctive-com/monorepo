import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export interface SectionHeaderProps {
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const StyledSectionHeader = styled.div`
  color: pink;
`;

/**
 * It renders a title and some children, and animates them in when they're scrolled into view
 * This Component is use in home page for categories of posts
 *
 * @param {SectionHeaderProps} props - SectionHeaderProps
 * @returns A styled component
 */
export function SectionHeader(props: SectionHeaderProps) {
  // animate the title and subtitle in
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const hrRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    if ((titleRef.current, subtitleRef.current)) {
      gsap.from([titleRef.current?.children, subtitleRef.current?.children], {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      gsap.from(hrRef.current, {
        width: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });
    }
  }, []);

  return (
    <StyledSectionHeader
      className="relative overflow-hidden"
      ref={containerRef}
    >
      <div
        className="overflow-hidden py-2 text-center text-3xl text-gray-800 md:py-4 md:text-5xl"
        ref={titleRef}
      >
        <h3>{props.title}</h3>
      </div>

      <div
        className="mt-2 overflow-hidden text-center text-sm text-gray-400 md:mt-4 md:text-lg"
        ref={subtitleRef}
      >
        <h3>{props.children && props.children}</h3>
      </div>

      <hr
        className="m-auto my-4 h-1 w-11/12 shadow-lg md:my-8 md:w-1/3"
        ref={hrRef}
      />
    </StyledSectionHeader>
  );
}

export default SectionHeader;
