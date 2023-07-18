import { motion } from "framer-motion"
// CSS
import "./Disertantes.css"
// json
import JSON from "./info.json"
// IMGs
import fondo from "./fondo_lineas.svg"

export default function Disertantes() {
    return (
        <section id="disertantes">

            {JSON.map((evento, index) => <Evento key={index} tipo={evento.tipo} items={evento.items} />)}

            <img src={fondo} alt="" className="fondo" />
        </section>
    )
}

function Evento({ tipo, items }) {
    return (
        <div className={"container " + tipo.replaceAll(' ', '_')}>
            <h1 className="title"> {tipo} </h1>
            {items.map((disertante, index) => <Disertante key={index} nombre={disertante.nombre} foto={disertante.foto} cv={disertante.cv} cv_link={disertante.cv_link} asociacion={disertante.asociacion} />)}
        </div>
    )
}


function Disertante({ nombre, foto, cv }) {
    return (
        <motion.div
            className="disertante"
            whileHover={{ scale: 1.05 }}
        >
            <div className="foto">
                <img src={foto} alt="" />
            </div>
            <div className="texto">
                <h2> {nombre} </h2>
                <ul>
                    {cv.map((item, index) => <li key={index}> <span> {item} </span> </li>)}
                </ul>
            </div>
        </motion.div>
    )
}