import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface PageHeaderI {
  text: string;
  isBack?: boolean;
  className?: string;
}
export function PageHeader({ className, text, isBack = true }: PageHeaderI) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center gap-5 rounded-xl px-8 py-3 shadow-lg ${className}`}
    >
      {isBack ? (
        <IoMdArrowBack
          className="cursor-pointer text-3xl"
          onClick={() => {
            /* on click, it will navigate back one page. */
            if (isBack) {
              navigate(-1);
            }
          }}
        />
      ) : (
        <HiOutlineMenuAlt2 className="text-3xl" />
      )}
      <span className="text-xl">{text}</span>
    </div>
  );
}

export default PageHeader;
