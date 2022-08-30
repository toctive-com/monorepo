import { IonIcon } from '@ionic/react';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

interface INavigationItem {
  label: string;
  icon: any;
  href?: string;
}

/**
 * It renders a navigation item with an icon and a label
 *
 * @param  - label - the text to display
 * @returns A functional component that returns a div with a className of item flex flex-col
 * items-center justify-center rounded py-2 px-4 and a span with a className of text-sm.
 */
const NavigationItem = ({ label, icon, href = '/' }: INavigationItem) => {
  const location = useLocation();
  return (
    <Link to={href}>
      <div
        className={`item flex flex-col items-center justify-center rounded py-2 px-4 ${
          location.pathname === href && 'bg-blue-500 text-white'
        }`}
      >
        <IonIcon
          icon={icon}
          className={
            location.pathname === href ? 'text-xl' : 'opacity-85 text-2xl'
          }
        />
        {location.pathname === href && <span className="text-sm">{label}</span>}
      </div>
    </Link>
  );
};

export const BottomNavigation = ({ items }: { items: INavigationItem[] }) => {
  /* This is a useLayoutEffect hook that is animating the navbar on page load. */
  const navRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let transition: gsap.core.Tween;
    if (navRef.current) {
      transition = gsap.from(navRef.current, {
        y: 100,
        opacity: 0.5,
      });
    }
    return () => {
      transition.kill();
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-0 right-0 left-0 z-30 h-32 bg-gradient-to-t from-gray-400 to-transparent dark:from-gray-900"></div>
      <div
        ref={navRef}
        className="fixed bottom-2 right-2 left-2 z-30 flex flex-row items-center justify-between overflow-y-hidden rounded-xl bg-white p-2 text-gray-700 shadow dark:bg-gray-800 dark:text-gray-300"
      >
        {items.map((item, index) => (
          <NavigationItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>
    </>
  );
};

export default BottomNavigation;
