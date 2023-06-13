import { motion } from "framer-motion"
// CSS
import "./Disertantes.css"
// json
import JSON from "./info.json"

// import img from "./imgs/Luis Tudanca.png"

export default function Disertantes() {
    return (
        <section id="disertantes">
            <h1> Disertantes </h1>
            {/* <div className="container"> */}
                {JSON.map( evento => <Evento tipo={evento.tipo} items={evento.items}/>)}
                {/* {JSON[0].items.map(disertante => <Disertante nombre={disertante.nombre} foto={disertante.foto} cv={disertante.cv} asociacion={disertante.asociacion} />)} */}
            {/* </div> */}
        </section>
    )
}

function Evento({tipo, items}) {
    return(
        <div className={"container " + tipo.replaceAll(' ', '_')}>
            <h2 className="title"> {tipo} </h2>
            {items.map(disertante => <Disertante nombre={disertante.nombre} foto={disertante.foto} cv={disertante.cv} cv_link={disertante.cv_link} asociacion={disertante.asociacion} />)}
        </div>
    )
}


function Disertante({ nombre, foto, cv, cv_link, asociacion }) {
    return (
        // <a href=""></a>
        <motion.a
            className="disertante"
            href={cv_link}
            whileHover={{ scale: 1.2 }}
        >
            <div className="foto">
                <img src={foto} alt="" />
                {/* <img src="./imgs/Luis Tudanca.png" alt="" /> */}
                {/* <img src="imgs/disertantes/Luis Tudanca.png" alt="" /> */}
            </div>
            <div className="texto">
                <h2> {nombre} </h2>
                {/* <h4> {asociacion} </h4> */}
                <small> {cv} </small>
            </div>
        </motion.a>
    )
}