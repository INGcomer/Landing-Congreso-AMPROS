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
import Fondo_card_2 from "./imgs/grupo de amigos.jpg"
import fondo_log from "./imgs/grupo de amigos con logo.png"

import carrucel1 from "./imgs/carrucel/disertantes-psiquiatras.png"
import carrucel2 from "./imgs/carrucel/disertantes-psiquiatras2.png"



export default function Header() {
    return (
        <section id='header'>

            {/* <img 
                src={logo_completo} alt="" 
                className="logo"
            /> */}

            <div className="content">
                {/* <motion.div 
                    className="card activefalse"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                      }}
                      whileTap={{ scale: 0.9 }}
                ></motion.div> */}
                {/* <div className="card activetrue"></div> */}
                {/* <div className={"card active" + clas} onClick={()=> setClas(!clas)}> 1 </div>
                <div className={"card active" + clas} onClick={()=> setClas(!clas)}> 2 </div>
                <div className={"card active" + clas} onClick={()=> setClas(!clas)}> 3 </div>
                <div className={"card active" + clas} onClick={()=> setClas(!clas)}> 4 </div> */}

                <Carrucel/>
                {/* <Card text={'kk'}/> */}


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
            
            {/* <div className="fondo"></div> */}

            <img src={Fondo} alt="" className='fondo'/>
        </section>
    )
}

function Card({text}) {
    const [Position, setPosition] = useState(0);

    const [class1, setClass1] = useState('');

    useEffect(() => {
        if (Position > 2) {
            setPosition(0)
        }
        if (Position < 0) {
            setPosition(2)
        }
        if (Position === 0) {
            setClass1("derecha")
        }
        if (Position === 1) {
            setClass1("centro")
        }
        if (Position === 2) {
            setClass1("izquierda")
        }
    },[Position]);

    return(
        <>
            <button className='left' onClick={()=> setPosition(Position - 1)}></button>
            <div className={"card " + class1}> {text} </div>
            <button className='right' onClick={()=> setPosition(Position + 1)}></button>
        </>
    )
}


function Carrucel(){
    const [Position, setPosition] = useState(0);

    const [display1, setDisplay1] = useState();
    const [display2, setDisplay2] = useState();
    const [display3, setDisplay3] = useState();
    const [display4, setDisplay4] = useState();

    const [IsHovering, setIsHovering] = useState(false);

    const [class1, setClass1] = useState("derecha");
    const [class2, setClass2] = useState("derecha");
    const [class3, setClass3] = useState("derecha");
    const [class4, setClass4] = useState("derecha");

    useEffect(() => {
        if (Position == 0) {
            setClass1("centro")
            setClass2("derecha")
            setClass3("derecha")
            setClass4("derecha")
        }
        if (Position == 1) {
            setClass1("izquierda")
            setClass2("centro")
            setClass3("derecha")
            setClass4("derecha")
        }
        if (Position == 2) {
            setClass1("izquierda")
            setClass2("izquierda")
            setClass3("centro")
            setClass4("derecha")
        }
        if (Position == 3) {
            setClass1("derecha")
            setClass2("derecha")
            setClass3("izquierda")
            setClass4("centro")
        }
        if (Position > 3) {
            setPosition(0)
        }
        if (Position < 0) {
            setPosition(3)
        }
    },[Position]);

    useEffect(() => {
        if (!IsHovering) {
            setTimeout(() => {
                setPosition(Position + 1)
                console.log("Delayed for 1 second.");
            }, "60000");
        }
    });


    return(
        <div className='carrucel'>
            <button className='left' onClick={()=> setPosition(Position - 1)}></button>
            {/* <div className={"card " + class1} id='uno' onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)}>  */}
            <div className={"card " + class1} id='uno'> 
                <img src={fondo_log} alt="" className='fondo_targeta_1' />
                {/* <img src={logo_completo} alt="" className='logo'/> */}
            </div>
            {/* <div className={"card " + class2} id='dos' onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)}> */}
            <div className={"card " + class2} id='dos'>
                <img src={carrucel1} alt="" className='fondo_targeta_1' />
            </div>
            {/* <div className={"card " + class3} id='tres' onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)}> */}
            <div className={"card " + class3} id='tres'>
                <img src={carrucel2} alt="" className='fondo_targeta_1' />
            </div>
            {/* <div className={"card " + class4} id='cuatro' onMouseOver={()=>setIsHovering(true)} onMouseOut={()=>setIsHovering(false)}> */}
            <div className={"card " + class4} id='cuatro'>
                <img src={Fondo_card_1} alt="" className='fondo_targeta_1' />
            </div>
            <button className='right' onClick={()=> setPosition(Position + 1)}></button>
        </div>
    )
}
