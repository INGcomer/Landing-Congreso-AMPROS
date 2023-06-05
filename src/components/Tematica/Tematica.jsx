// CSS
import "./Tematica.css"
// IMGs
import people from "./imgs/undraw_people_re_8spw.svg"
import word from "./imgs/forma con img 2.png"

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
                <img src={word} alt="" />
            </div>
        </section>
    );
}
