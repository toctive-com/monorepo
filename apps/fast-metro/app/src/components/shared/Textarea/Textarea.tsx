export function Textarea(props: any) {
  const {
    className,
    text,
    placeholder = 'here...',
  }: { className?: string; text: string; placeholder: string } = props;
  return (
    <textarea
      className={`text-md rounded-md border-2 p-2 outline-none focus:border-blue-500 ${className}`}
      placeholder={placeholder}
    >
      {text}
    </textarea>
  );
}
export default Textarea;
