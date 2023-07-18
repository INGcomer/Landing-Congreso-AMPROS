import { motion } from "framer-motion"
// CSS
import "./Actividades.css"
// img
import fondo from "./imgs/fondo_lineas.svg"
// ICONS
import Groups2Icon from '@mui/icons-material/Groups2';
import CampaignIcon from '@mui/icons-material/Campaign';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export default function Actividades() {
    return (
        <section id="Actividades">
            <h1> Ejes temáticos </h1>
            <div className="flag_container">
                <motion.div
                    className='flag conferencias'
                    initial={{ x: '100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2> Instituciones y Salud Mental </h2>
                    <p>
                        1) Escenarios Postpandémicos en las instituciones.  <br /> <br />
                        2) Aplicación de la Ley de Salud Mental en las instituciones de la provincia de Mendoza.  <br /><br />
                        3) Las instituciones frente a las problemáticas de la salud mental. <br /> <br />
                        4) El desafío de un sistema integrado de Salud.  <br /> <br />
                        5) Prácticas institucionales y Salud Mental.
                    </p>
                    <CampaignIcon />
                </motion.div>

                <motion.div
                    className='flag tres_topic'
                    initial={{ x: '100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}

                >
                    <h2> Comunidad y Salud Mental </h2>
                    <p>
                        1) Escenarios Postpandémicos en las comunidades.  <br /><br />
                        2) Diversidades.  <br /><br />
                        3) Géneros.  <br /><br />
                        4) Infancias, adolescencias y juventudes.  <br /><br />
                        5) Abordaje poblacional en Salud Mental. <br /><br />
                        6) Nuevas Comunidades. <br /><br />
                        7) Perspectivas del consumo hoy.  <br /><br />
                        8) Implementación de la Ley de Salud Mental en la comunidad.
                    </p>
                    <Groups2Icon />
                </motion.div>

                <motion.div
                    className='flag mesas'
                    initial={{ x: '100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}

                >
                    <h2> Profesionales y Salud Mental </h2>
                    <p>
                        1) Prácticas profesionales en el escenario postpandémico.  <br /><br />
                        2) La formación de los profecionales en Salud Mental. Nuevos abordajes.  <br /><br />
                        3) Los equipos de Salud y políticas públicas.  <br /><br />
                        4) Profesionales de la Salud y derechos laborales.  <br /><br />
                    </p>
                    <HistoryEduIcon />
                </motion.div>
            </div>

            <img src={fondo} alt="" className="fondo" />
        </section>
    )
}