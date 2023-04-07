interface Props {
    children: React.ReactNode
    className?: string
}

export default function TitleComponent({ children, className }: Props) {
    return (
        <span className={`block text-xl font-bold text-slate-700 ${className}`}>{children}</span>
    )
}