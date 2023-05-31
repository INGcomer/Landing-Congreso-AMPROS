import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
// CSS
import "./Header.css"
// IMGs
import logo_completo from "./imgs/logo congreso completo.svg"
import logo_ampros from "./imgs/logo ampros.png"
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

                {/* <Carrucel/> */}
                <Card text={'kk'}/>
                <Card text={'2'}/>
                <Card text={'3'}/>
            </div>

            <div className="logos_container">
                <div className="logos"></div>
                <div className="ampros">
                    <img src={logo_ampros} alt="" />
                </div>
            </div>
            
            {/* <div className="fondo"></div> */}
        </section>
    )
}

function Card({text}) {
    const [isActive, setIsActive] = useState(1);

    const [class1, setClass1] = useState('');

    useEffect(() => {
        if (class1 == "") {
            setClass1("derecha")
        }
        if (class1 == "derecha") {
            setClass1("centro")
        }
        if (class1 == "centro") {
            setClass1("izquierda")
        }
        if (class1 == "izquierda") {
            setClass1("centro")
        }
    },[isActive]);

    return(
        <div className={"card " + class1} onClick={()=> setIsActive(isActive + 1)}> {text} </div>
    )
}


function Carrucel(){
    const [isActive, setIsActive] = useState(1);

    const [class1, setClass1] = useState("derecha");
    const [class2, setClass2] = useState("derecha");
    const [class3, setClass3] = useState("derecha");

    useEffect(() => {
        if (isActive == 1) {
            setClass1("centro")
        }
        if (isActive == 2) {
            setClass1("izquierda")
            setClass2("centro")
        }
        if (isActive == 3) {
            setClass2("izquierda")
            setClass3("centro")
        }
        if (isActive == 4) {
            setIsActive(1)
        }
    },[isActive]);


    return(
        <>
            <div className={"card " + class1} id='uno' onClick={()=> setIsActive(isActive + 1)}> 1 </div>
            <div className={"card " + class2} id='dos' onClick={()=> setIsActive(isActive + 1)}> 2 </div>
            <div className={"card " + class3} id='tres' onClick={()=> setIsActive(isActive + 1)}> 3 </div>
        </>
    )
}
