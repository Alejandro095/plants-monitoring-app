interface Props {
    children: React.ReactNode
    className?: string
}

export default function TextComponent({ children, className }: Props) {
    return (
        <span className={`block text-md font-medium text-slate-600 ${className}`}>{children}</span>
    )
}