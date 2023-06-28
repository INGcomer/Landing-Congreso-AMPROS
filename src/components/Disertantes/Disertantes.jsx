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
            {/* <h1> Disertantes </h1> */}
            {/* <div className="container"> */}
            {JSON.map(evento => <Evento tipo={evento.tipo} items={evento.items} />)}
            {/* {JSON[0].items.map(disertante => <Disertante nombre={disertante.nombre} foto={disertante.foto} cv={disertante.cv} asociacion={disertante.asociacion} />)} */}
            {/* </div> */}
            <div className="container ">
                <h1 className="title secondary"> 3 Topic </h1>

                <div className="_3topic">
                    <p>
                        Mesa interactiva en la que especialistas presentan 3 ideas debatibles sobre un tema específico. El público participa dando sus opiniones y juntos, se busca generar producciones colectivas que promuevan el avance y la mejora en el campo de la salud mental.
                    </p>
                </div>

                <h1 className="title secondary"> 3 Topic: ejes temáticos </h1>
                <div className="_3topic ejes">
                    <ul>
                        <li>
                            <span> DIVERSIDADES. </span>
                        </li>
                        <li>
                            <span> GENERO. </span>
                        </li>
                        <li>
                            <span> INFANCIAS, ADOLESCENCIAS Y JUVENTUDES. </span>
                        </li>
                        <li>
                            <span> PERSPECTIVA DEL CONSUMO HOY. </span>
                        </li>
                        <li>
                            <span> LAS INSTITUCIONES FRENTE A LA PROBLEMÁTICA DE LA SALUD MENTAL. </span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span> NUEVAS MODALIDADES VINCULARES. </span>
                        </li>
                        <li>
                            <span> LA FORMACION DE LOS PROFESIONALES EN LA SALUD MENTAL. NUEVOS DESAFIOS. </span>
                        </li>
                        <li>
                            <span> PROFESIONALES DE LA SALUD MENTAL Y DERECHOS LABORALES. </span>
                        </li>
                        <li>
                            <span> LOS EQUIPOS DE SALUD MENTAL Y POLITICAS PÚBLICAS. </span>
                        </li>
                    </ul>
                </div>
            </div>
            <img src={fondo} alt="" className="fondo"/>
        </section>
    )
}

function Evento({ tipo, items }) {
    return (
        <div className={"container " + tipo.replaceAll(' ', '_')}>
            <h1 className="title"> {tipo} </h1>
            {items.map(disertante => <Disertante nombre={disertante.nombre} foto={disertante.foto} cv={disertante.cv} cv_link={disertante.cv_link} asociacion={disertante.asociacion} />)}
        </div>
    )
}


function Disertante({ nombre, foto, cv, cv_link, asociacion }) {
    return (
        // <a href=""></a>
        <motion.div
            className="disertante"
            // href={cv_link}
            whileHover={{ scale: 1.05 }}
        >
            <div className="foto">
                <img src={foto} alt="" />
                {/* <img src="./imgs/Luis Tudanca.png" alt="" /> */}
                {/* <img src="imgs/disertantes/Luis Tudanca.png" alt="" /> */}
            </div>
            <div className="texto">
                <h2> {nombre} </h2>
                {/* <h4> {asociacion} </h4> */}
                {/* <small> {cv} </small> */}
                <ul>
                    {cv.map(item => <li> <span> {item} </span> </li>)}
                </ul>
            </div>
        </motion.div>
    )
}
function _Disertante({ nombre, foto, cv, cv_link, asociacion }) {
    return (
        // <a href=""></a>
        <motion.a
            className="disertante"
            href={cv_link}
            whileHover={{ scale: 1.05 }}
        >
            <h2 className="titulo"> {nombre} </h2>
            <div className="container">
                <div className="foto">
                    <img src={foto} alt="" />
                    {/* <img src="./imgs/Luis Tudanca.png" alt="" /> */}
                    {/* <img src="imgs/disertantes/Luis Tudanca.png" alt="" /> */}
                </div>
                <div className="texto">
                    {/* <h4> {asociacion} </h4> */}
                    <ul>
                        {cv.map(item => <li> <span> {item} </span> </li>)}
                    </ul>
                </div>
            </div>
        </motion.a>
    )
}