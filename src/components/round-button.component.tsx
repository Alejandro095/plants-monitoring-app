import { IconType } from "react-icons"
import ElementComponent from "./element.component"

export interface Props {
    icon: IconType
    backgroundColor: string
    iconColor: string
    onClick?: () => void
    as?: 'button' | 'a'
    label?: string
    className?: string
    size?: 'sm' | 'md'
    labeColor?: string
}

const SIZES = {
    sm: {
        width: 'w-8',
        height: 'h-8',
        iconSize: 20,
    },
    md: {
        width: 'w-11',
        height: 'h-11',
        iconSize: 24,
    }
}

export default function RoundButtonComponent({ as = 'a', icon: Icon, backgroundColor, iconColor, label, onClick, className, size: SIZE_TYPE = 'md', labeColor, ...rest }: Props) {
    return (
        <div className={`${SIZES[SIZE_TYPE].width} ${className}`}>
            <ElementComponent
            className={`${backgroundColor} rounded-full w-full ${SIZES[SIZE_TYPE].height} flex items-center justify-center hover:opacity-90 cursor-pointer`}
            as={as}
            onClick={onClick}
            {...rest}
            >
                <Icon size={SIZES[SIZE_TYPE].iconSize} className={`font-medium ${iconColor} transform -scale-x-100`} />
            </ElementComponent>
            {label && <span className={`text-xs font-medium block text-center mt-[2px] ${labeColor}`}>{label}</span>}
        </div>
    )
}