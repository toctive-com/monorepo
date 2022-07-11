type ButtonSize = 'sm' | 'md' | 'lg';
interface PrimaryButtonI {
  className?: string;
  text?: string;
  size: ButtonSize;
}

const buttonPadding = {
  sm: 'px-4 py-1.5',
  md: 'px-8 py-3.5',
  lg: 'px-16 py-5',
};

function PrimaryButton({ className, text, size = 'md' }: PrimaryButtonI) {
  return (
    <div
      className={`
      cursor-pointer 
      select-none 
      rounded-md 
      bg-blue-500 
      shadow-lg shadow-blue-200 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 
      ${buttonPadding[size]} ${className}`}
    >
      <span className={`text-${size} text-white`}>{text}</span>
    </div>
  );
}

export default PrimaryButton;
