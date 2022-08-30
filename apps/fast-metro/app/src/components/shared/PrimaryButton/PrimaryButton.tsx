type ButtonSize = 'sm' | 'md' | 'lg';
interface PrimaryButtonI {
  className?: string;
  text?: string | React.ReactNode;
  size?: ButtonSize;
  onClick?: () => void;
}

const buttonPadding = {
  sm: 'px-4 py-1.5',
  md: 'px-8 py-3.5',
  lg: 'px-16 py-5',
};
const textSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-xl',
};

function PrimaryButton({
  className,
  text,
  size = 'md',
  onClick,
}: PrimaryButtonI) {
  return (
    <div
      className={`
      cursor-pointer 
      select-none 
      rounded-md 
      bg-blue-500 
      shadow-lg shadow-blue-200 hover:bg-blue-600 dark:bg-blue-400 dark:shadow-gray-800 dark:hover:bg-blue-500 
      ${buttonPadding[size]} ${className}`}
      onClick={onClick}
    >
      <span className={`${textSizes[size]} capitalize text-white`}>{text}</span>
    </div>
  );
}

export default PrimaryButton;
