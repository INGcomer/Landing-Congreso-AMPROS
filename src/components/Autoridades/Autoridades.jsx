import { motion } from "framer-motion"
// CSS
import "./Autoridades.css"
// IMGs
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
                        <strong> Lic. Norma Condori </strong> <br />
                        Secretaria  General Primer Congreso Argentino <br /> de Salud Mental AMProS <br />
                        Lic. en Enfermería. Especialista en Pediatría. <br />
                        ProSecretaria de Capacitación Profesional AMProS <br />
                        Maestría en Administración en Servicios de Salud.
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
                        <strong> Dr. Pablo Melonari </strong> <br />
                        Presidente Primer Congreso Argentino <br /> de Salud Mental AMProS <br />
                        Secretario de Capacitación Profesional AMProS  <br />
                        Médico Pediatra especialista <br /> en Infectologia Pediatrica <br />
                        Magister en Infectologia Pediátrica
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
                        <strong> Lic. Paula Corso </strong> <br />
                        Secretaria Científica Congreso Argentino <br /> de Salud Mental AMProS <br />
                        Lic. en Psicología USAL <br />
                        Psicoanalista vincular <br />
                        Docente de Posgrado de la Asociación <br /> Psicoanalítica Pareja, Familia y Grupo (APPFG) <br />
                        Ex Presidenta de la APPFG <br />
                        Miembro Titular de la APPFG de Mendoza
                    </p>
                </motion.div>
            </div>
            <motion.div
                className="comicion_cientifica"
                initial={{ y: '10%' }}
                whileInView={{ y: '0%' }}
                transition={{ duration: 0.5 }}
            >
                <h2> Miembros de Comisión Científica </h2>

                <div className="nombres">

                    <div className="pichi">
                        <strong> Estefanía Roo </strong>
                        APPFG
                    </div>
                    <div className="pichi">
                        <strong> Mariela Riba </strong>
                        SPM
                    </div>
                    <div className="pichi">
                        <strong> María Sol Guerrero </strong>
                        APSIM
                    </div>
                    <div className="pichi">
                        <strong> Silvina Riera </strong>
                        APSIM
                    </div>
                    <div className="pichi">
                        <strong> Catalina Slukich </strong>
                        ACEP
                    </div>
                    <div className="pichi">
                        <strong> Alicia Lucero </strong>
                        EOL
                    </div>
                    <div className="pichi">
                        <strong> Carla Serna </strong>
                        ACEP
                    </div>
                    <div className="pichi">
                        <strong> Johana Quiroga </strong>
                        APREM
                    </div>
                    <div className="pichi">
                        <strong> Mónica Balada </strong>
                        CPPM
                    </div>
                    <div className="pichi">
                        <strong> Estela Landaburu </strong>
                        EOL
                    </div>
                    <div className="pichi">
                        <strong> Mercedes Tolay </strong>
                        APREM
                    </div>
                    <div className="pichi">
                        <strong> Malvina Acosta Bastias </strong>
                        APREM
                    </div>
                    <div className="pichi">
                        <strong> Marcos Burgos </strong>
                        AASM
                    </div>
                    <div className="pichi">
                        <strong> Diana Palma </strong>
                        EOL
                    </div>
                    <div className="pichi">
                        <strong> García Stella Maris </strong>
                        APREM
                    </div>
                    <div className="pichi">
                        <strong> Patricia Barbarán </strong>
                        APREM
                    </div>
                    <div className="pichi">
                        <strong> Carla Colombo </strong>
                        APPFG
                    </div>

                </div>
            </motion.div>

            <img src={fondo} alt="" className="fondo" />
        </section>
    );
}
