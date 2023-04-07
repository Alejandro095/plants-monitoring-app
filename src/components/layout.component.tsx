interface Props {
    children: React.ReactNode
    paddingX?: boolean
    minH?: boolean
}

export default function LayoutComponent({ children, paddingX, minH = true }: Props) {
    return (
        <div className={`
        flex justify-center items-center min-h-[100vh] md:bg-slate-200
        `}>
            <div className={
                `
                ${paddingX && 'py-2'}
                ${paddingX && 'px-4'}
                ${minH && 'min-h-[100vh]'}
                bg-white
                w-full flex flex-col
                md:min-h-fit
                md:max-w-[26rem]
                md:max-h-[58rem]
                md:h-[80vh]
                md:overflow-y-auto
                md:rounded-lg
                `
            }>
                {children}
            </div>
        </div>
    )
}