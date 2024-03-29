import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { isRTL } from '../../../assets/js/appDirection';

export function LinkButton({
  text,
  to = '/home',
}: {
  text: string;
  to?: string;
}) {
  return (
    <Link to={to}>
      <div className="flex w-full cursor-pointer items-center justify-between rounded-md bg-white px-8 py-4 shadow-md hover:bg-gray-50 dark:bg-gray-900 dark:shadow-[rgb(0,0,0,0.4)]">
        <span className="text-xl">{text}</span>
        {isRTL() ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </div>
    </Link>
  );
}

export default LinkButton;
