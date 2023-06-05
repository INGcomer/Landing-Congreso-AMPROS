import { motion } from "framer-motion"
// CSS
import "./Actividades.css"
// img
// import Logo from "./imgs/logo congreso.svg"
import fondo from "./imgs/fondo_lineas.svg"
// ICONS
import Groups2Icon from '@mui/icons-material/Groups2';
import CampaignIcon from '@mui/icons-material/Campaign';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export default function Actividades() {
    return (
        <section id="Actividades">
            <h1> Ejes tematicos </h1>
            <div className="flag_container">
                <motion.div
                    className='flag conferencias'
                    initial={{ x: '300%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5, delay: 0}}
                >
                    {/* <div className="flag conferencias"> */}
                    <h2> Insituciones y Salud Mental </h2>
                    <p>
                        1) Escenarios Postpandémicos en las instituciones.  <br /> <br />
                        2) Aplicación de la ley de salud mental en las instituciones de la provincia de Mendoza.  <br /><br />
                        3) Las instituciones frente a las problemáticas de la salud mental. <br /> <br />
                        4) El desafío de un sistema integrado de Salud.  <br /> <br />
                        5) Práctica institucionales y Salud Mental.
                    </p>
                    <CampaignIcon />
                    {/* </div> */}
                </motion.div>

                <motion.div
                    className='flag tres_topic'
                    initial={{ x: '260%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5, delay: 0.5 }}

                >
                    {/* <div className="flag tres_topic"> */}
                    <h2> Comunidad y Salud Mental </h2>
                    <p>
                        1) Escenarios Postpandémicos en las comunidades.  <br /><br />
                        2) Diversidades.  <br /><br />
                        3) Géneros.  <br /><br />
                        4) Infancias, adolescencias y juventudes.  <br /><br />
                        5) Abordaje poblecional en Salud Mental. <br /><br />
                        6) Nuevas Comunidades. <br /><br />
                        7) Perspectivas del consumo hoy.  <br /><br />
                        8) Implementación de la ley de salud mental en la comunidad.
                    </p>
                    <Groups2Icon />
                    {/* </div> */}
                </motion.div>

                <motion.div
                    className='flag mesas'
                    initial={{ x: '120%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5, delay: 1 }}

                >
                    {/* <div className="flag mesas"> */}
                    <h2> Profecionales y Salud Mental </h2>
                    <p>
                        1) Prácticas profecionales en el escenario postpandémico.  <br /><br />
                        2) La formación de los profecionales en Salud Mental. Nuevos abordajes.  <br /><br />
                        3) Los equipos de Salud y políticas públicas.  <br /><br />
                        4) Profesionales de la Salud y derechos laborales.  <br /><br />
                    </p>
                    <HistoryEduIcon />
                    {/* </div> */}
                </motion.div>
            </div>

            <img src={fondo} alt="" className="fondo"/>
        </section>
    )
}