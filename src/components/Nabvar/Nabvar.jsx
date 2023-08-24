// animaciones
import { motion } from "framer-motion"
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
						<a href="PDFs/Reglamento para presentación de Trabajos Libres. Congreso Salud Mental AMProS 2023.pdf"> Reglamento </a>
					</div>
				</div>
				<div class="dropdown">
					<span className="dropbtn"> Programa Científico </span>
					<div class="dropdown-content">
						<a href="#disertantes"> Disertantes </a>
						<a href="#Cronograma"> Programa </a>
						<a href="#Actividades2"> Actividades </a>
						<a href="#"> Simposio de la industria </a>
					</div>
				</div>

				<a href="#Salon"> Ubicación  </a>
				<a href="#Hoteles"> Hoteles  </a>
				<a href="#Entrada"> Entrada </a>
				<a href="#PreCongreso"> Pre Congreso </a>
			</div>

			<div className="CallToAccion_container">
				<a href="https://www.withsisa.com/evento/64b9d49f6e8dadd7bc466198" className="CallToAccion"> INSCRIBIRSE </a>
			</div>
		</motion.nav>
	)
}