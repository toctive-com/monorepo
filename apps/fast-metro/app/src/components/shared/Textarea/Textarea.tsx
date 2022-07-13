export default function Textarea(props: any) {
    const { className, text, placeholder="here..." }: { className?: string, text: string, placeholder: string } = props
    return (
        <textarea className={`border-2 rounded-md border-blue-500 outline-none text-md p-2 ${className}`}
            placeholder={placeholder}
        >
            {text}
        </textarea>
    )
}
