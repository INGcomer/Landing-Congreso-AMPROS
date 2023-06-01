// CSS
import "./Tematica.css"
// IMGs
import people from "./imgs/undraw_people_re_8spw.svg"
import word from "./imgs/figura.png"

export default function Tematica() {
    return (
        <section id="Tematica">
            <h1> Salud mental <br />despues del SARS-CoV-2 </h1>
            <div className="container">
                {/* <div className="izquierda"> */}
                <p> La pandemia de COVID-19 ha aumentado la prevalencia de problemas de salud
                    mental debido al miedo y el estrés psicológico, así como el estrés relacionado
                    con los cambios producidos en la forma en que vivimos nuestras vidas. Además,
                    ha llevado a las personas a adoptar mecanismos de afrontamiento negativos,
                    y ha interrumpido los servicios sociales y de salud, la educación y las actividades
                    comunitarias. Como consecuencia, la salud mental de personas de todas las edades y grupos
                    socioeconómicos se ha visto afectada negativamente. La situación postpandemia se convierte
                    en una oportunidad para potenciar una nueva cultura de profesionalismo,
                    en la que el cuidado de los cuidadores debe convertirse en una prioridad tanto
                    a nivel personal como institucional. Desde la Asociación Mendocina de Profesionales
                    de la Salud se promueve y protege la salud mental y se considera indispensable actuar en
                    este momento.
                </p>
                {/* </div>
                <div className="derecha"> */}
                {/* <img src={people} alt="" /> */}
                {/* </div> */}
            </div>
            <div className="forma">
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="rgba(255, 130.109, 0, 1)" offset="0%"></stop>
                            <stop id="stop2" stop-color="rgba(255, 187, 78, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient)"
                        d="M19.2,-27.6C23.2,-23.6,23.4,-15.7,26.5,-8.1C29.6,-0.6,35.6,6.4,33.6,10.4C31.6,14.5,21.8,15.4,14.9,18.2C7.9,21,4,25.7,-0.1,25.8C-4.1,25.8,-8.2,21.4,-14.8,18.5C-21.3,15.6,-30.4,14.2,-32.4,10C-34.5,5.8,-29.7,-1.1,-24.9,-5.7C-20.1,-10.3,-15.5,-12.6,-11.3,-16.4C-7.2,-20.3,-3.6,-25.8,2,-28.6C7.6,-31.4,15.3,-31.5,19.2,-27.6Z"
                        width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
                        // style="transition: all 0.3s ease 0s;" 
                        stroke="url(#sw-gradient)"
                    >
                    <img src={word} alt="" />
                    </path>
                </svg>
                </div>
        </section>
    );
}
