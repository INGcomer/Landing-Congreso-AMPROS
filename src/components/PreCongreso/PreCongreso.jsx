import { motion } from "framer-motion"
// CSS
import "./PreCongreso.css"
// imgs
export default function PreCongreso() {
    return (
        <div id="PreCongreso">
            <h1> Si solo querés asistir a una actividad del Pre Congreso, podés inscribirte haciendo click en alguno de los siguientes links: </h1>
            <div className="links">
                <motion.a
                    href="https://www.withsisa.com/evento/64b9d49f6e8dadd7bc466198"
                    whileHover={{ scale: 1.05 }}
                >
                    Encuentro de la Red Argentina de Enfermería en Salud Mental
                </motion.a>
                <motion.a
                    href="https://www.withsisa.com/evento/64b9d49f6e8dadd7bc466198"
                    whileHover={{ scale: 1.05 }}
                >
                    Encuentro Argentino de Salud Mental y Espiritualidad
                </motion.a>
                <motion.a
                    href="https://www.withsisa.com/evento/64b9d49f6e8dadd7bc466198"
                    whileHover={{ scale: 1.05 }}
                >
                    Encuentro Provincial Interdisciplinario de Residentes en Salud Menta
                </motion.a>
            </div>
        </div>
    )
}