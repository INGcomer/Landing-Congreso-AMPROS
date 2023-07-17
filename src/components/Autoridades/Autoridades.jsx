import { motion } from "framer-motion"
// CSS
import "./Autoridades.css"
// IMGs
import placeholder from './img/Blues cover.jpg'
import fondo from './img/fondo.svg'

import Norma from "./img/Norma.png"
import Pablo from "./img/pablo.png"
import Paula from "./img/Foto Paula Corso.png"

export default function Autoridades() {
    return (
        <section id="Autoridades">
            <h1> Autoridades </h1>
            <div className="comicion_directiva">
                <motion.div
                    className="autoridad"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >

                    <h2>  Secretaria  General </h2>
                    <img src={Norma} alt="" />
                    <p>
                        <strong> Norma Condori </strong> <br />
                        Secretaria  General I° Congreso Argentino de Salud Mental AMProS <br />
                        Lic. En Enfermería. Especialista en pediatría. <br />
                        Pro-Secretario de Capacitación Profesional AMProS <br />
                        Maestría en Administración en Servicios de Salud. 
                        {/* Maestranda de la Maestría de Salud Pública y Seguridad Social */}
                    </p>
                </motion.div>
                <motion.div
                    className="autoridad"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2> Presidente </h2>
                    <img src={Pablo} alt="" />
                    <p>
                        <strong> Pablo Melonari </strong> <br />
                        Presidente I° Congreso Argentino de Salud Mental AMProS <br />
                        Secretario de Capacitación Profesional AMProS  <br />
                        Médico pediatra especialista en Infectologia pediatrica <br />
                        Magister en Infectologia pediátrica
                    </p>
                </motion.div>
                <motion.div
                    className="autoridad"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2> Secretaria Científica </h2>
                    <img src={Paula} alt="" />
                    <p>
                        <strong> Paula Corso </strong> <br />
                        Secretaria Científica I° Congreso Salud Mental AMProS <br />
                        Lic. en Psicología USAL <br />
                        Psicoanalista vincular <br />
                        Docente de Posgrado de la Asociación Psicoanalítica Pareja, Familia y Grupo (APPFG) <br />
                        Ex Presidenta de la APPFG <br />
                        Miembro Titular de la APPFG de Mendoza
                    </p>
                </motion.div>
            </div>
            {/* <motion.div
                className="comicion_cientifica"
                initial={{ y: '10%' }}
                whileInView={{ y: '0%' }}
                transition={{ duration: 0.5 }}
            >
                <h2> Miembros de comisión científica </h2>

                <div className="nombres">

                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>
                    <div className="pichi">
                        <strong> B.B King </strong>
                    </div>

                </div>
            </motion.div> */}

            <img src={fondo} alt="" className="fondo" />
        </section>
    );
}
