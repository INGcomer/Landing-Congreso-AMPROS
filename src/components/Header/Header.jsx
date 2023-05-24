// CSS
import "./Header.css"
// IMGs
import logo_completo from "./imgs/logo congreso completo.svg"

export default function Header() {
    return (
        <section id='header'>

            <img 
                src={logo_completo} alt="" 
                className="logo"
            />
            
            <div className="fondo"></div>
        </section>
    )
}