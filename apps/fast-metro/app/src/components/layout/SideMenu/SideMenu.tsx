import { gsap } from 'gsap';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import MenuButton from '../../shared/MenuButton/MenuButton';

interface Props {
  sideMenuIsOpened: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}

export const SideMenu = ({ sideMenuIsOpened, setter }: Props) => {
  const sideMenuRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* Animate opening and closing the side menu component */
  useLayoutEffect(() => {
    const duration = 0.3;
    if (sideMenuRef && overlayRef) {
      if (sideMenuIsOpened === true) {
        gsap.to(sideMenuRef.current, { duration, x: 0, opacity: 1 });
        gsap.to(overlayRef.current, { duration, opacity: 0.3 });
      } else {
        gsap.to(sideMenuRef.current, {
          duration,
          opacity: 0,
          x:
            (sideMenuRef.current?.getBoundingClientRect().width as number) * -1,
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

  return (
    <>
      <div
        className={`${
          sideMenuIsOpened ? 'fixed' : 'hidden'
        } top-0 left-0 z-50 h-full w-full bg-black opacity-50`}
        onClick={() => setter(!sideMenuIsOpened)}
        ref={overlayRef}
      ></div>
      <aside
        className="absolute bottom-0 z-50 flex h-full w-full max-w-xs flex-col gap-4 bg-white p-4 opacity-0 shadow-lg"
        ref={sideMenuRef}
      >
        <MenuButton text="Home" href="/home" />
        <MenuButton text="Settings" href="/settings" />
        <MenuButton text="Map" href="/map" />
        <MenuButton text="Settings" href="/settings" />
        <MenuButton text="Settings" href="/settings" />
      </aside>
    </>
  );
};
