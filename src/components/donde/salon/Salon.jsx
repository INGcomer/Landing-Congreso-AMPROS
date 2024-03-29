import { motion } from "framer-motion"
// CSS
import "./Salon.css"
// img
import salon from "./imgs/salon chico.jpg"
// ICONS

export default function Salon() {
    return (
        <section id="Salon">
            <motion.a
                href="https://goo.gl/maps/skvER97HX9PmEx758"
                className="texto"
                initial={{ x: '-100%' }}
                whileInView={{ x: '0%' }}
                transition={{ duration: 0.5 }}
            >
                <h1> ¿Dónde se realizará el evento? </h1>
                <p> Polo de Congresos y Exposiciones AMProS, Videla Aranda 2080, Cruz de Piedra, Maipú, Mendoza. </p>
            </motion.a>
            <div className="mainImg">
                <img src={salon} alt="" />
            </div>

            <div id="Ubicacion">
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.2515620822302!2d-68.78128118813041!3d-33.02996585503339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e73a636a5a81d%3A0x781563d83c3e0d97!2sAMProS%20Finca!5e0!3m2!1sen!2sar!4v1684882485287!5m2!1sen!2sar"
                        width="100%"
                        height="100%"
                        style={{
                            border: 0
                        }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>
        </section>
    )
}