import { gsap } from 'gsap';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { isRTL } from '../../../assets/js/appDirection';
import MenuButton from '../../shared/MenuButton/MenuButton';

interface Props {
  sideMenuIsOpened: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

export const SideMenu = ({ sideMenuIsOpened, setter }: Props) => {
  const sideMenuRef = useRef<any>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* Animate opening and closing the side menu component */
  useLayoutEffect(() => {
    const duration = 0.3;
    if (sideMenuRef && overlayRef) {
      if (sideMenuIsOpened === true) {
        gsap.to(sideMenuRef.current, {
          duration,
          x: 0,
          opacity: 1,
          display: 'flex',
        });
        gsap.to(overlayRef.current, { duration, opacity: 0.3 });
      } else {
        gsap.to(sideMenuRef.current, {
          duration,
          opacity: 0,
          x:
            (sideMenuRef.current?.getBoundingClientRect().width as number) *
            (isRTL() ? 1 : -1),
          display: 'none',
        });
        gsap.to(overlayRef.current, { duration, opacity: 0 });
      }
    }
  }, [sideMenuIsOpened, sideMenuRef]);

  /* Closing the side menu when the user navigates to a new page. */
  const location = useLocation();
  useEffect(() => {
    setter(false);
  }, [location.pathname, setter]);

  const { t } = useTranslation();
  const menuLinks = [
    { label: t`side-menu.home`, href: '/home' },
    { label: t`side-menu.settings`, href: '/settings' },
    { label: t`side-menu.map`, href: '/map' },
    { label: t`side-menu.contact-metro`, href: '/contact-metro' },
    { label: t`side-menu.contact-us`, href: '/contact-us' },
    { label: t`side-menu.about-us`, href: '/about-us' },
  ];

  /* A hook that is used to animate the buttons in the menu. */
  useEffect(() => {
    if (sideMenuIsOpened) {
      gsap.from(sideMenuRef.current?.children, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        x: 60 * (isRTL() ? 1 : -1),
      });
    }
  }, [sideMenuIsOpened]);

  return (
    <>
      <div
        className={`${
          sideMenuIsOpened ? 'fixed' : 'hidden'
        } top-0 left-0 right-0 z-50 h-full w-full bg-black opacity-50`}
        onClick={() => setter(!sideMenuIsOpened)}
        ref={overlayRef}
      ></div>
      <aside
        className="absolute bottom-0 z-50 flex h-full w-full max-w-xs flex-col gap-3 bg-white p-4 opacity-0 shadow-lg dark:bg-gray-800"
        ref={sideMenuRef}
      >
        {menuLinks.map((item, index) => (
          <MenuButton text={item.label} href={item.href} key={index} />
        ))}
      </aside>
    </>
  );
};
