import { useContext } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { isRTL } from '../../../assets/js/appDirection';
import { SideMenuContext } from '../../../hooks/SideMenuContext';
import IsUpdated from '../IsUpdated/IsUpdated';

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
      className={`absolute top-0 left-0 z-50  w-full  truncate rounded-b-xl bg-white px-8 py-4 shadow-lg dark:bg-gray-800 ${className}`}
    >
      <div className='flex justify-between items-center'>
        <div className="flex items-center gap-5">
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
          <span className="text-2xl font-medium">{text}</span>
        </div>
        <IsUpdated
          is_updated={false}
          className="text-red cursor-pointer self-start text-2xl"
        />
      </div>
    </div>
  );
}

export default PageHeader;
