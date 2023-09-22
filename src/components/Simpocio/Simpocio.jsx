import { motion } from "framer-motion"
// CSS
import "./Simpocio.css"
// imgs
import doctor from "./imgs/Mauricio-Flores.jpg"
import logo from "./imgs/baliarda.png"
import fondo from './imgs/curvas.svg'


export default function Simpocio() {
    return (
        <div id="Simpocio">
            <div className="texto">
                <h2> *Vorxetil "Buenos Modales" <br /> Cómo poner a trabajar al límite mi creatividad.  </h2>
                <p> 
                    <b> Dr. Mauricio Flores </b>  <br />
                    Médico Psiquiatra   <br />
                    Psicofarmacólogo.  
                </p>
            </div>
            <div className="imgs">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="foto">
                    <img src={doctor} alt="" />
                </div>
            </div>

            <img src={fondo} alt="" className="fondo" />
        </div>
    )
}