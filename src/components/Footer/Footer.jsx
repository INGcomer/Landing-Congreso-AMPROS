// CSS
import "./Footer.css"
// img
import Logo from "./imgs/logo ampros.png"
export default function Footer() {
    return (
        <footer>
            <a href="https://www.ampros.org.ar/">
                <img src={Logo} alt="Logo AMPROS" />
            </a>
        </footer>
    )
}