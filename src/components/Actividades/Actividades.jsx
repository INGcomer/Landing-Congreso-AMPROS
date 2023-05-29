import { motion } from "framer-motion"
// CSS
import "./Actividades.css"
// img
// import Logo from "./imgs/logo congreso.svg"

// ICONS
import Groups2Icon from '@mui/icons-material/Groups2';
import CampaignIcon from '@mui/icons-material/Campaign';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export default function Actividades() {
    return (
        <section id="Actividades">
            <h1> Actividades Academicas </h1>
            <div className="flag_container">
                <motion.div
                    className='flag conferencias'
                    initial={{ height: '30%' }}
                    whileInView={{ height: '80%' }}
                    transition={{ duration: 2, delay: 0}}
                >
                    {/* <div className="flag conferencias"> */}
                    <h2> Conferencias </h2>
                    <p>
                        Esto es una conferencia
                    </p>
                    <CampaignIcon />
                    {/* </div> */}
                </motion.div>

                <motion.div
                    className='flag tres_topic'
                    initial={{ height: '30%' }}
                    whileInView={{ height: '80%' }}
                    transition={{ duration: 2, delay: 0.5 }}

                >
                    {/* <div className="flag tres_topic"> */}
                    <h2> Tres Topic </h2>
                    <p>
                        Esto es un tres topic
                    </p>
                    <Groups2Icon />
                    {/* </div> */}
                </motion.div>

                <motion.div
                    className='flag mesas'
                    initial={{ height: '30%' }}
                    whileInView={{ height: '80%' }}
                    transition={{ duration: 2, delay: 1 }}

                >
                    {/* <div className="flag mesas"> */}
                    <h2> Mesas de trabajo </h2>
                    <p>
                        esto es una mesa de trabajo
                    </p>
                    <HistoryEduIcon />
                    {/* </div> */}
                </motion.div>
            </div>
        </section>
    )
}