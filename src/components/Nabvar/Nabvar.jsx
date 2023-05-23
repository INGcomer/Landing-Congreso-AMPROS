// CSS
import "./Nabvar.css"
// img
import Logo from "./imgs/logo congreso.svg"
export default function Navbar() {
    return (
        <nav>
            <a href="#header" className="logo_container">
                <img src={Logo} alt="" />
            </a>

            <div className="nav_sections">
                <a href="#Tematica"> Tematica </a>
                <a href="#Cronograma"> Cronograma </a>
                <a href="#Actividades"> Actividades </a>
                <a href="#Entrada"> Entrada </a>
            </div>

            <div className="CallToAccion_container">
                <a href="" className="CallToAccion"> INSCRIBIRSE </a>
            </div>
        </nav>
    )
}