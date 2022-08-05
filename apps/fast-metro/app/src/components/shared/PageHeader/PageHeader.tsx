import { useContext } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { isRTL } from '../../../assets/js/appDirection';
import { SideMenuContext } from '../../../hooks/SideMenuContext';

interface PageHeaderI {
  text: string;
  isBack?: boolean;
  className?: string;
}
export function PageHeader({ className, text, isBack = true }: PageHeaderI) {
  const navigate = useNavigate();
  const toggleSideMenu = useContext(SideMenuContext);

  return (
    <div
      className={`flex w-full items-center gap-5 rounded-xl px-8 py-3 shadow-sm ${className}`}
    >
      {isBack ? (
        isRTL() ? (
          <IoMdArrowForward
            className="cursor-pointer text-3xl"
            onClick={() => {
              /* on click, it will navigate back one page. */
              if (isBack) {
                navigate(-1);
              }
            }}
          />
        ) : (
          <IoMdArrowBack
            className="cursor-pointer text-3xl"
            onClick={() => {
              /* on click, it will navigate back one page. */
              if (isBack) {
                navigate(-1);
              }
            }}
          />
        )
      ) : (
        <HiOutlineMenuAlt2
          className={`text-3xl rtl:scale-x-[-1]`}
          onClick={toggleSideMenu}
        />
      )}
      <span className="text-xl">{text}</span>
    </div>
  );
}

export default PageHeader;
