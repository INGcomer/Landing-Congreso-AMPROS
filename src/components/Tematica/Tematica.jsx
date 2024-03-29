// CSS
import "./Tematica.css"
// IMGs
import word from "./imgs/forma con img 2.png"
import fondo from "./imgs/fondo_lineas.svg"

export default function Tematica() {
    return (
        <section id="Tematica">
            <h1> Avanzando juntos hacia la salud mental integral: Congreso Nacional Interdisciplinario </h1>
            <div className="container">
                <p> La emergencia sanitaria ha incrementado la prevalencia de problemas de
                    salud mental debido al miedo, estrés y cambios en la vida cotidiana. Por lo tanto,
                    es de gran importancia priorizar la salud mental en todos los grupos etarios y
                    promover una cultura de cuidado de los profesionales de la salud. Producto de esto,
                    nace el <b>Primer Congreso Nacional Interdisciplinario de Salud Mental.</b> Se trata de
                    un congreso que congrega a mas de <b>600 profesionales de la Salud de diferentes partes
                    del país.</b>
                </p>
            </div>
            <div className="forma">
                <img src={word} alt="" />
            </div>
            <img src={fondo} alt="" className="fondo"/>
        </section>
    );
}
