import InformationCardComponent from "@/components/information-card.component";
import LayoutComponent from "@/components/layout.component";
import PlantCardComponent from "@/components/plant-card.component";
import RoundButtonComponent from "@/components/round-button.component";
import TitleComponent from "@/components/title.component";

import { MdOutlineWaterDrop, MdOutlineDoorSliding } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { HiOutlineSun } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { TiWavesOutline } from "react-icons/ti";
import { GiPaperBagFolded } from "react-icons/gi";
import TextComponent from "@/components/text.component";

import Image from 'next/image'


export default function Index() {
    return (
        <LayoutComponent>
            <div className="relative">

                <div className="w-full aspect-square relative">
                    <Image src="/plant.webp" alt="Imagen de una planta" fill style={{ objectFit: 'cover',  objectPosition: 'center'}}/>
                </div>

                <div className="bg-white relative bottom-8 rounded-t-3xl p-6">
                    <TitleComponent className="mb-4">Filodendro Atom</TitleComponent>
                    <div className="grid grid-rows-2 grid-cols-2 gap-3">
                        <InformationCardComponent icon={HiOutlineSun} title="LUZ" description="ALTA" />
                        <InformationCardComponent icon={MdOutlineWaterDrop} title="HUMEDAD" description="50%" />
                        <InformationCardComponent icon={CiTempHigh} title="TEMP. AIRE" description="32 °C" iconSize={29} />
                        <InformationCardComponent icon={MdOutlineWaterDrop} title="HUMEDAD AIRE" description="15%" />
                    </div>
                    <TextComponent className="mt-5 mb-4">Acciones</TextComponent>
                    <div className="flex justify-around gap-2">
                        <RoundButtonComponent icon={MdOutlineWaterDrop} backgroundColor="bg-slate-200/75" iconColor="fill-slate-500/80" labeColor="text-slate-600" label="Regar"/>
                        <RoundButtonComponent icon={GiPaperBagFolded} backgroundColor="bg-slate-200/75" iconColor="fill-slate-500/80" labeColor="text-slate-600" label="Abono"/>
                        <RoundButtonComponent icon={TiWavesOutline} backgroundColor="bg-slate-200/75" iconColor="fill-slate-500/80" labeColor="text-slate-600" label="Ventilar"/>
                        <RoundButtonComponent icon={MdOutlineDoorSliding} backgroundColor="bg-slate-200/75" iconColor="fill-slate-500/80" labeColor="text-slate-600" label="Puertas"/>
                    </div>

                    <TextComponent className="mt-10 mb-0 text-center font-bold">SISTEMAS TELEFONICOS PIA</TextComponent>
                    <TextComponent className="text-center mt-0">Sistema para monitorización de plantas</TextComponent>

                    <TextComponent className="mt-4 text-center">Integrantes</TextComponent>

                    <ul className="list-disc mt-2 px-6">
                        <li className="text-slate-600 text-sm">1808180 - Javier Alejandro Monsivais Tovar</li>
                        <li className="text-slate-600 text-sm">1845729 - Christian Martínez Sáenz</li>
                        <li className="text-slate-600 text-sm">1847552 - Andrés Michel Salazar Ruiz</li>
                    </ul>
                </div>

            </div>
        </LayoutComponent>
    )
}