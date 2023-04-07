import { IconType } from "react-icons"
import ElementComponent from "./element.component"

export interface Props {
    icon: IconType
    title: string
    description: string
    iconSize?: number
}

export default function InformationCardComponent({ icon: Icon, title, description, iconSize = 25 }: Props) {
    return (
        <div className="px-3 py-2 bg-slate-200/75 rounded-md flex min-h-[3.5rem]">
            <div className="flex justify-center items-center mr-3 w-[2rem]">
                <Icon size={iconSize} className="text-slate-400" />
            </div>
            <div className="flex flex-col leading-4 justify-center">
                <span className="text-[.70rem] font-medium text-slate-500/80 tracking-wider">{title}</span>
                <span className="text-xs font-medium text-slate-600">{description}</span>
            </div>
        </div>
    )
}