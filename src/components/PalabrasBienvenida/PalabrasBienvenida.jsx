import { motion } from "framer-motion"
// CSS
import "./PalabrasBienvenida.css"


export default function Bienvenida() {
    return (
        <section id="Bienvenida">
            <h1> Palabras de Bienvenida </h1>

            <p> La Asociación Mendocina de Profesionales de la Salud da la bienvenida al Primer Congreso Argentino de Salud Mental 
                organizado por esta entidad gremial. Este representa un gran desafío al ser el primero en su tipo y 
                requirió la participación interdisciplinaria de diversos profesionales de la salud mental.
                 El objetivo es promover el encuentro y la reflexión sobre la salud mental y los nuevos desafíos
                  en el campo de la salud. La pandemia de COVID-19 ha tenido un impacto negativo en la salud mental a nivel global,
                   afectando a personas de todas las edades y grupos socioeconómicos. La OMS destaca la necesidad urgente de priorizar 
                   la salud mental en todos los grupos etarios. 
                   Los profesionales de la salud también han experimentado altos niveles de ansiedad, insomnio y síntomas depresivos. Esta situación postpandemia representa una oportunidad para promover una nueva cultura de profesionalismo, centrada en el cuidado de los cuidadores. Es fundamental trabajar en la promoción y protección de la salud mental, ya que el desafío es grande pero la recompensa de superarlo puede ser aún mayor.<b> El momento de actuar es ahora. </b></p>

            <div className="link">
                <motion.a
                    href="PDFs/Palabras de Bienvenida.pdf"
                    whileHover={{ scale: 1.05 }}
                >
                    Seguir leyendo
                </motion.a>
            </div>
        </section>
    )
}