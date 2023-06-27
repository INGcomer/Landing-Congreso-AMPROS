import { motion } from "framer-motion"
// CSS
import "./Entrada.css"
// img

export default function Entrada() {
    return (
        <section id="Entrada">
            <h1> ¿Qué Incyue mi entrada? </h1>
            <motion.div 
                className="entrada izquierda"
                initial={{ x: '-100%' }}
                whileInView={{ x: '0%' }}
                transition={{ duration: 0.5}}
            >
                <div className="texto">
                    <h2> Entrada general </h2>
                    <div className="items">
                        <ul>
                            <li> Conferencias </li>
                            <li> Foro de debate </li>
                            <li> Mesas abierta de Trabajos libres </li>
                            <li> Simposio de la industria </li>
                            <li> Feria de empresas </li>
                        </ul>
                        <ul>
                            <li> Coffees break </li>
                            <li> Cocktail de bienvenida </li>
                            <li> Cena de gala </li>
                            <li> Actividades culturales </li>
                            <li> Actividades pre-congreso </li>
                        </ul>
                    </div>
                </div>
                <div className="precio">
                    <h3> $36.000 </h3>
                </div>
            </motion.div>

            <motion.div 
                className="entrada derecha"
                initial={{ x: '100%' }}
                whileInView={{ x: '0%' }}
                transition={{ duration: 0.5}}
            >
                <div className="texto">
                    <h2> Entrada general afiliados </h2>
                    <div className="items">
                        <ul>
                            <li> x Conferencias </li>
                            <li> x Tres Topic </li>
                            <li> x Mesas de Trabajos </li>
                        </ul>
                        <ul>
                            <li> x Coffes </li>
                            <li> Coktayl de bienvenida </li>
                            <li> Cena de gala </li>
                        </ul>
                    </div>
                </div>
                <div className="precio">
                    <h3> $xx.xxx </h3>
                </div>
            </motion.div>
        </section>
    )
}