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
                transition={{ duration: 0.5 }}
            >
                <div className="texto">
                    <h2> Entrada general </h2>
                    <div className="items">
                        <ul>
                            <li> <span> Conferencias </span> </li>
                            <li> <span> 3 Topic </span> </li>
                            <li> <span> Mesas abierta de Trabajos libres </span> </li>
                            <li> <span> Simposio de la industria </span> </li>
                            <li> <span> Feria de empresas </span> </li>
                        </ul>
                        <ul>
                            <li> <span> Coffees break </span> </li>
                            <li> <span> Cocktail de bienvenida </span> </li>
                            <li> <span> Cena de gala </span> </li>
                            <li> <span> Actividades culturales </span> </li>
                            <li> <span> Actividades pre-congreso </span> </li>
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
                transition={{ duration: 0.5 }}
            >
                <div className="texto">
                    <h2> Entrada general afiliados </h2>
                    <div className="items">
                        <ul>
                            <li> <span> Conferencias </span> </li>
                            <li> <span> 3 Topic </span> </li>
                            <li> <span> Mesas abierta de Trabajos libres </span> </li>
                            <li> <span> Simposio de la industria </span> </li>
                            <li> <span> Feria de empresas </span> </li>
                        </ul>
                        <ul>
                            <li> <span> Coffees break </span> </li>
                            <li> <span> Cocktail de bienvenida </span> </li>
                            <li> <span> Cena de gala </span> </li>
                            <li> <span> Actividades culturales </span> </li>
                            <li> <span> Actividades pre-congreso </span> </li>
                        </ul>
                    </div>
                </div>
                <div className="precio">
                    <h3> $18.000 </h3>
                </div>
            </motion.div>

            <div className="aclaraciones">
                <p>
                    El precio de la entrada aumentara a medida que nos acerquemos a la fecha del congreso
                </p>
            </div>
        </section>
    )
}