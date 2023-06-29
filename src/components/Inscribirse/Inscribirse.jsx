import { motion } from "framer-motion"
// CSS
import "./Inscribirse.css"


export default function Inscribirse({ texto, variante }) {
    return (
        <section id="Inscribirse" className={variante}>
            {/* <h2> ¡No pierdas! </h2> */}
            <h2> {texto} </h2>

            <motion.a
                href="https://www.withsisa.com/evento/649cf11e8bca586c548f0122"
                whileHover={{ scale: 1.05 }}
            >
                INSCRIBIRSE
            </motion.a>
        </section>
    )
}