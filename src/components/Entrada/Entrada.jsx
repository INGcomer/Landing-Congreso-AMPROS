// CSS
import "./Entrada.css"
// img
// import Logo from "./imgs/logo congreso.svg"

// ICONS

export default function Entrada() {
    return (
        <section id="Entrada">
            <h1> ¿Que Inclulle mi entrada? </h1>
            <div className="entrada izquierda">
                <div className="texto">
                    <h2> Entrada general </h2>
                    <div className="items">
                        <ul>
                            <li> x Conferencias </li>
                            <li> x Tres Topic </li>
                            <li> x Mesas de Trabajos </li>
                        </ul>
                        <ul>
                            <li> x Coffes </li>
                            <li> Coktayl de bienvenida </li>
                            <li> Cena de gala </li>
                        </ul>
                    </div>
                </div>
                <div className="precio">
                    <h3> $xx.xxx </h3>
                </div>
            </div>

            <div className="entrada derecha">
                <div className="texto">
                    <h2> Entrada general afiliados </h2>
                    <div className="items">
                        <ul>
                            <li> x Conferencias </li>
                            <li> x Tres Topic </li>
                            <li> x Mesas de Trabajos </li>
                        </ul>
                        <ul>
                            <li> x Coffes </li>
                            <li> Coktayl de bienvenida </li>
                            <li> Cena de gala </li>
                        </ul>
                    </div>
                </div>
                <div className="precio">
                    <h3> $xx.xxx </h3>
                </div>
            </div>
        </section>
    )
}