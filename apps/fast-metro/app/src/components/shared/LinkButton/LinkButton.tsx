import { IoIosArrowForward } from 'react-icons/io';

export function LinkButton({ text }: { text: string }) {
  return (
    <div className="m-20 flex items-center justify-between rounded-md bg-white px-8 py-4 shadow-md hover:shadow-lg ">
      <span className="text-xl">{text}</span>
      <IoIosArrowForward />
    </div>
  );
}

export default LinkButton;
