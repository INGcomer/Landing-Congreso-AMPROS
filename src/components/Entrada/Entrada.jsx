import { motion } from "framer-motion"
// CSS
import "./Entrada.css"

export default function Entrada() {
    return (
        <section id="Entrada">
            <h1> ¿Qué incluye mi entrada? </h1>
            <div className="info">
                <div className="container">
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
                        <li> <span> Actividades Pre Congreso </span> </li>
                    </ul>
                </div>
            </div>


            <div className="NuevasEntradas">
                <div className="container">
                    <div className="fila">
                        <div className="nombre destacado">
                            Entrada General
                        </div>
                        <div className="precio">
                            $32.000
                        </div>
                    </div>
                    <div className="fila">
                        <div className="nombre">
                            Afiliado AMProS
                        </div>
                        <div className="precio">
                            $22.400
                        </div>
                    </div>
                    <div className="fila">
                        <div className="nombre">
                            Asociaciones
                        </div>
                        <div className="precio">
                            $27.200
                        </div>
                    </div>
                    <div className="fila">
                        <div className="nombre">
                            Afiliado <br />
                            <small> AMProS + Asociación </small>
                        </div>
                        <div className="precio">
                            $18.900
                        </div>
                    </div>
                    <div className="fila">
                        <div className="nombre">
                            <small> Residentes de especialidades asociadas a salud mental </small>
                        </div>
                        <div className="precio">
                            $16.000
                        </div>
                    </div>
                    <div className="fila">
                        <div className="nombre">
                            Estudiantes
                        </div>
                        <div className="precio">
                            $5.000
                        </div>
                    </div>
                </div>
            </div>

            {/* <motion.div
                className="entrada izquierda"
                initial={{ x: '-100%' }}
                whileInView={{ x: '0%' }}
                transition={{ duration: 0.5 }}
            >
                <div className="texto">
                    <h2> Entrada general </h2>
                </div>
                <div className="precio">
                    <h3> $32.000 </h3>
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
                </div>
                <div className="precio">
                    <h3> $22.400 </h3>
                </div>               
            </motion.div> */}

            {/* <div className="aclaraciones">
                <p>
                    Precio vigente hasta el 30/07.
                </p>
            </div> */}
        </section>
    )
}