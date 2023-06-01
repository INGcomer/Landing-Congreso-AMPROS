import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
// CSS
import "./Header.css"
// IMGs
import logo_completo from "./imgs/logo grande.svg"
import logo_ampros from "./imgs/logo ampros.png"
import APREM from "./imgs/Logos/APREM.png"
import APSIM from "./imgs/Logos/APSIM..png"
import EOL from "./imgs/Logos/EOL.png"
import SPM from "./imgs/Logos/SPM.png"


import Fondo from "./imgs/fondo_lineas.svg"
import Fondo_card_1 from "./imgs/pexels-1.jpg"



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
                </div>
                <div className="ampros">
                    <img src={logo_ampros} alt="" />
                </div>
                <div className="logos derecha">
                    <img src={EOL} alt="" />
                    <img src={SPM} alt="" />
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
        if (Position == 0) {
            setClass1("derecha")
        }
        if (Position == 1) {
            setClass1("centro")
        }
        if (Position == 2) {
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

    const [isActive, setIsActive] = useState(1);

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


    return(
        <div className='carrucel'>
            <button className='left' onClick={()=> setPosition(Position - 1)}></button>
            <div className={"card " + class1} id='uno'> 
                <img src={Fondo_card_1} alt="" className='fondo_targeta_1' />
                <img src={logo_completo} alt="" className='logo'/>
            </div>
            <div className={"card " + class2} id='dos'> 2 </div>
            <div className={"card " + class3} id='tres'> 3 </div>
            <div className={"card " + class4} id='cuatro'> 4 </div>
            <button className='right' onClick={()=> setPosition(Position + 1)}></button>
        </div>
    )
}
