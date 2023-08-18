import { motion } from "framer-motion"
// CSS
import "./Entrada.css"
// img
import cocter from "./coctel blanco.png"

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
                        <li> 
                            {/* <img src={cocter} alt="" /> */}
                            <span> Cocktail de bienvenida </span> 
                        </li>
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
                    </div>
                    <div className="fila">
                        <div className="nombre ">
                            Precio Base
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
                </div>

                <div className="container">
                    <div className="fila">
                        <div className="nombre destacado">
                            Entrada Basica
                        </div>
                    </div>
                    <div className="fila">
                        <div className="nombre">
                            Precio Base
                        </div>
                        <div className="precio">
                            $18.000
                        </div>
                    </div>
                    <div className="fila">
                        <div className="nombre">
                            Afiliado AMProS
                        </div>
                        <div className="precio">
                            $14.000
                        </div>
                    </div>
                    <div className="fila">
                        <div className="nombre">
                            Asociaciones
                        </div>
                        <div className="precio">
                            $15.300
                        </div>
                    </div>
                    <div className="fila">
                        <div className="nombre">
                            Afiliado <br />
                            <small> AMProS + Asociación </small>
                        </div>
                        <div className="precio">
                            $10.000
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
        </section>
    )
}