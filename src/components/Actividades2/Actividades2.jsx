import { motion } from "framer-motion"
// CSS
import "./Actividades2.css"
//img
import fondo from "./imgs/curvas.svg"
// JSON
import actividades from "./Actividades.json"

export default function Actividades2() {
    return (
        <section id="Actividades2">
            <h1> Actividades </h1>

            <div className="container">
                <div className="izquierda">
                    {actividades.Izquierda.map((actividad, index) => <Actividad key={index} className="Izquierda" actividad={actividad} />)}
                </div>
                <div className="derecha">
                    {actividades.Derecha.map((actividad, index) => <Actividad key={index} className="Izquierda" actividad={actividad} />)}
                </div>
            </div>

            <img src={fondo} alt="fondo" className="fondo" />
        </section>
    )
}


function Actividad({ actividad }) {
    return (
        <div className="actividad">
            <div className="texto">
                <h3> {actividad.Nombre} </h3>
                <p> {actividad.Descripcion} </p>
            </div>
            <div className="imagen">
                <img src={actividad.imagen} alt="" />
            </div>
        </div>
    )
}