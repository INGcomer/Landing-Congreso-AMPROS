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
                <a href=""> seccion 2</a>
                <a href=""> seccion 3</a>
                <a href=""> seccion 4</a>
            </div>

            <div className="CallToAccion_container">
                <a href="" className="CallToAccion"> INSCRIVIRSE </a>
            </div>
        </nav>
    )
}