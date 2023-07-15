// animaciones
import { motion } from "framer-motion"

// MUI
import Informacion from "./menus/info.jsx"
import CargaTrabajo from "./menus/Carga.jsx"
import Programa from "./menus/Programa.jsx"
// CSS
import "./Nabvar.css"
import "./menus/dropdowns/DropDown.css"
// imgs
import Logo from './imgs/nuevo logo congreso.svg'
export default function Navbar() {
	return (
		<motion.nav
			initial={{ y: '-100%' }}
			whileInView={{ y: '0%' }}
			transition={{ duration: 0.3, delay: 0 }}
		>
			{/* <nav> */}
			<a href="#header" className="logo_container">
				<img src={Logo} alt="" />
				Inicio
			</a>

			<div className="nav_sections">
				<div class="dropdown">
					<span className="dropbtn"> Información </span>
					<div class="dropdown-content">
						<a href="#Autoridades"> Autoridades </a>
						<a href="#"> Auspicios </a>
						<a href="#Tematica"> Informacion general </a>
					</div>
				</div>
				<div class="dropdown">
					<span className="dropbtn"> Carga de trabajos libres </span>
					<div class="dropdown-content">
						<a href="#Actividades"> Ejes </a>
						<a href="Reglamento para presentación de Trabajos Libres. Congreso Salud Mental AMProS 2023.pdf"> Reglamento </a>
					</div>
				</div>
				<div class="dropdown">
					<span className="dropbtn"> Programa Científico </span>
					<div class="dropdown-content">
						<a href="#disertantes"> Disertantes </a>
						<a href="#Cronograma"> Programa </a>
						<a href="#"> Simposio de la industria </a>
					</div>
				</div>


				{/* <a href="#Tematica"> Tematica </a> */}
				{/* <a href="#Cronograma"> Cronograma </a> */}
				<a href="#Salon"> Ubicación  </a>
				<a href="#Entrada"> Entrada </a>
			</div>

			<div className="CallToAccion_container">
				<a href="https://www.withsisa.com/evento/649cf11e8bca586c548f0122" className="CallToAccion"> INSCRIBIRSE </a>
			</div>
			{/* </nav> */}
		</motion.nav>
	)
}