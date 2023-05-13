import Image from 'next/image'

import InformationCardComponent from "@/components/information-card.component";
import LayoutComponent from "@/components/layout.component";
import RoundButtonComponent from "@/components/round-button.component";
import TitleComponent from "@/components/title.component";

import { MdOutlineWaterDrop, MdOutlineDoorSliding } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { HiOutlineSun } from "react-icons/hi";
import { TiWavesOutline } from "react-icons/ti";
import { GiPaperBagFolded } from "react-icons/gi";
import TextComponent from "@/components/text.component";
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';


export default function Index() {

    const ws = useRef<any>();

    const [data, setData] = useState({
        luz: '0.00', humedad: '0.00', tempAire: '0.00', humedadAire: '0.00'
    });

    useEffect(() => {
        ws.current = new WebSocket('wss://ws.up.railway.app');

        ws.current.onopen = () => {
            console.log('WebSocket Client Connected');
        }

        ws.current.onmessage = (message: any) => {
            if(!message.data) return;

            const [origin, action, payload] = message.data.split('~');

            if(origin != 'client-web' && action != 'set-data') return;

            let [luz, humedad, tempAire, humedadAire] = payload.split('|');

            setData({
                luz: Number(luz).toFixed(2),
                humedad: Number(humedad).toFixed(2),
                tempAire: Number(tempAire).toFixed(2),
                humedadAire: Number(humedadAire).toFixed(2)
            });
        }

        ws.current.onclose = () => {
            console.log('WebSocket Client Disconnected');
        }

        return () => {
            if (ws.current) ws.current.close()
        }
    }, [])

    const handlerAction = (action: string) => {
        return () => {
            if (ws.current && ws.current.readyState == WebSocket.OPEN) ws.current.send(`client-web~set-action~${action}`);
        }
    }

    return (
        <LayoutComponent>
            <Head>
                <title>Planta | Girasol</title>
            </Head>

            <div className="relative">

                <div className="w-full aspect-square relative">
                    <Image src="/plant.jpg" alt="Imagen de una planta" fill style={{ objectFit: 'cover',  objectPosition: 'center'}}/>
                </div>

                <div className="bg-white relative bottom-8 rounded-t-3xl p-6">
                    <TitleComponent className="mb-4">Girasol</TitleComponent>
                    <div className="grid grid-rows-2 grid-cols-2 gap-3">
                        <InformationCardComponent icon={HiOutlineSun} title="LUZ" description={`${data.luz} %`} />
                        <InformationCardComponent icon={MdOutlineWaterDrop} title="HUMEDAD" description={`${data.humedad} %`} />
                        <InformationCardComponent icon={CiTempHigh} title="TEMP. AIRE" description={`${data.tempAire} °C`} iconSize={29} />
                        <InformationCardComponent icon={MdOutlineWaterDrop} title="HUMEDAD AIRE" description={`${data.humedadAire} %`} />
                    </div>
                    <TextComponent className="mt-5 mb-4">Acciones</TextComponent>
                    <div className="flex justify-around gap-2">
                        <RoundButtonComponent onClick={handlerAction('puertas')} icon={MdOutlineDoorSliding} backgroundColor="bg-slate-200/75" iconColor="fill-slate-500/80" labeColor="text-slate-600" label="Puertas"/>
                        <RoundButtonComponent onClick={handlerAction('ventilar')} icon={TiWavesOutline} backgroundColor="bg-slate-200/75" iconColor="fill-slate-500/80" labeColor="text-slate-600" label="Ventilar"/>
                        <RoundButtonComponent onClick={handlerAction('abono')} icon={GiPaperBagFolded} backgroundColor="bg-slate-200/75" iconColor="fill-slate-500/80" labeColor="text-slate-600" label="Abono"/>
                        <RoundButtonComponent onClick={handlerAction('regar')} icon={MdOutlineWaterDrop} backgroundColor="bg-slate-200/75" iconColor="fill-slate-500/80" labeColor="text-slate-600" label="Regar"/>
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