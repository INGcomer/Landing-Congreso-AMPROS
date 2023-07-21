import { useState, useEffect } from 'react';
// import { motion } from "framer-motion"
// CSS
import "./Header.css"
// IMGs
// import logo_completo from "./imgs/logo grande.svg"
import logo_ampros from "./imgs/logo ampros.png"
import APREM from "./imgs/Logos/APREM.png"
import APSIM from "./imgs/Logos/APSIM..png"
import EOL from "./imgs/Logos/EOL.png"
import SPM from "./imgs/Logos/SPM.png"
// import AASM from "./imgs/Logos/AASM.jpg"
import ACEP from "./imgs/Logos/Asociación Cuyana de Estudios Psicoanálisis.jpg"
// import TS from "./imgs/Logos/trabajo social.png"
import DAR from "./imgs/Logos/DAR.jpg"
import APP from "./imgs/Logos/Asociación de Psicoanálisis de Pareja, Familia y Grupos de Mendoza.png"
import COLEGIO from "./imgs/Logos/Colegio de Psicopedagogos.jpg"

import Fondo from "./imgs/fondo_lineas.svg"
import Fondo_card_1 from "./imgs/pexels-1.png"
import fondo_log from "./imgs/grupo de amigos con logo.png"

// imagenes carrucel
import beneficios from "./imgs/carrucel/beneficios-afiliado-desktop.png"
import carrucel1 from "./imgs/carrucel/placa-1-desktop.png"
import carrucel2 from "./imgs/carrucel/placa-2-desktop.png"
import carrucel3 from "./imgs/carrucel/placa-3-desktop.png"
import carrucel4 from "./imgs/carrucel/placa-4-desktop.png"
import carrucel5 from "./imgs/carrucel/placa-5-desktop.png"

// imagenes carrucel celular
import main from "./imgs/carrucel/celular/main.png"
import benficios_mobile from "./imgs/carrucel/celular/beneficios-afiliado-mobile.png"
import carrucel1_cel from "./imgs/carrucel/celular/placa-1-mobile.png"
import carrucel2_cel from "./imgs/carrucel/celular/placa-2-mobile.png"
import carrucel3_cel from "./imgs/carrucel/celular/placa-3-mobile.png"
import carrucel4_cel from "./imgs/carrucel/celular/placa-4-mobile.png"
import carrucel5_cel from "./imgs/carrucel/celular/placa-5-mobile.png"



export default function Header() {
    return (
        <section id='header'>
            <div className="content">

                <Carrucel />

            </div>

            <div className="logos_container">
                <div className="logos izquierda">
                    <img src={APREM} alt="" />
                    <img src={APSIM} alt="" />
                    <img src={ACEP} alt="" />
                    <img src={DAR} alt="" />
                </div>
                <div className="ampros">
                    <a href="https://www.ampros.org.ar/">
                        <img src={logo_ampros} alt="" />
                    </a>
                </div>
                <div className="logos derecha">
                    <img src={EOL} alt="" />
                    <img src={SPM} alt="" />
                    <img src={APP} alt="" />
                    <img src={COLEGIO} alt="" />
                </div>
            </div>

            <img src={Fondo} alt="" className='fondo' />
        </section>
    )
}


function Carrucel() {
    const [Position, setPosition] = useState(0);

    const [Dispocitivo, SetDispocitivo] = useState("");

    const [IsHovering, setIsHovering] = useState(false);

    const [class1, setClass1] = useState("derecha");
    const [class2, setClass2] = useState("derecha");
    const [class3, setClass3] = useState("derecha");
    const [class4, setClass4] = useState("derecha");
    const [class5, setClass5] = useState("derecha");
    const [class6, setClass6] = useState("derecha");
    const [class7, setClass7] = useState("derecha");

    useEffect(() => {
        if (window.innerWidth <= 500) {
            SetDispocitivo("phone")
        }
    }, []);

    useEffect(() => {
        if (Position == 0) {
            setClass1("centro")
            setClass2("derecha")
            setClass3("derecha")
            setClass4("derecha")
            setClass5("derecha")
            setClass6("derecha")
            setClass7("derecha")
        }
        if (Position == 1) {
            setClass1("izquierda")
            setClass2("centro")
            setClass3("derecha")
            setClass4("derecha")
            setClass5("derecha")
            setClass6("derecha")
            setClass7("derecha")
        }
        if (Position == 2) {
            setClass1("izquierda")
            setClass2("izquierda")
            setClass3("centro")
            setClass4("derecha")
            setClass5("derecha")
            setClass6("derecha")
            setClass7("derecha")
        }
        if (Position == 3) {
            setClass1("izquierda")
            setClass2("izquierda")
            setClass3("izquierda")
            setClass4("centro")
            setClass5("derecha")
            setClass6("derecha")
            setClass7("derecha")
        }
        if (Position == 4) {
            setClass1("izquierda")
            setClass2("izquierda")
            setClass3("izquierda")
            setClass4("izquierda")
            setClass5("centro")
            setClass6("derecha")
            setClass7("derecha")
        }
        if (Position == 5) {
            setClass1("izquierda")
            setClass2("izquierda")
            setClass3("izquierda")
            setClass4("izquierda")
            setClass5("izquierda")
            setClass6("centro")
            setClass7("derecha")
        }
        if (Position == 6) {
            setClass1("izquierda")
            setClass2("izquierda")
            setClass3("izquierda")
            setClass4("izquierda")
            setClass5("izquierda")
            setClass6("izquierda")
            setClass7("centro")
        }
        if (Position > 6) {
            setPosition(0)
        }
        if (Position < 0) {
            setPosition(6)
        }
    }, [Position]);

    // useEffect(() => {
    //     if (!IsHovering) {
    //         setTimeout(() => {
    //             setPosition(Position + 1)
    //         }, "60000");
    //     }
    // });


    return (
        <div className='carrucel'>
            <button className='left' onClick={() => setPosition(Position - 1)}></button>
            <div className={"card " + class1} id='uno'>
                {Dispocitivo == "phone" ? <img src={main} alt="" className='fondo_targeta_1' /> : <img src={fondo_log} alt="" className='fondo_targeta_1' />}
            </div>
            <div className={"card " + class2} id='dos'>
                <a href="PDFs/DOC-20230405-WA0036..pdf" className='afiliacion'> AFILIARSE </a>
                {Dispocitivo == "phone" ? <img src={benficios_mobile} alt="" className='fondo_targeta_1' /> : <img src={beneficios} alt="" className='fondo_targeta_1' />}
                {/* {Dispocitivo == "phone" ? <img src={carrucel1_cel} alt="" className='fondo_targeta_1' /> : <img src={carrucel1} alt="" className='fondo_targeta_1' />} */}
            </div>
            <div className={"card " + class3} id='tres'>
                {Dispocitivo == "phone" ? <img src={carrucel1_cel} alt="" className='fondo_targeta_1' /> : <img src={carrucel1} alt="" className='fondo_targeta_1' />}
            </div>
            <div className={"card " + class4} id='cuatro'>
                {Dispocitivo == "phone" ? <img src={carrucel2_cel} alt="" className='fondo_targeta_1' /> : <img src={carrucel2} alt="" className='fondo_targeta_1' />}
            </div>
            <div className={"card " + class5} id='cinco'>
                {Dispocitivo == "phone" ? <img src={carrucel3_cel} alt="" className='fondo_targeta_1' /> : <img src={carrucel3} alt="" className='fondo_targeta_1' />}
            </div>
            <div className={"card " + class6} id='seis'>
                {Dispocitivo == "phone" ? <img src={carrucel4_cel} alt="" className='fondo_targeta_1' /> : <img src={carrucel4} alt="" className='fondo_targeta_1' />}
            </div>
            <div className={"card " + class7} id='siete'>
                {Dispocitivo == "phone" ? <img src={carrucel5_cel} alt="" className='fondo_targeta_1' /> : <img src={carrucel5} alt="" className='fondo_targeta_1' />}
            </div>
            <button className='right' onClick={() => setPosition(Position + 1)}></button>
        </div>
    )
}
