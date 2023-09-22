import { motion } from "framer-motion"
// CSS
import "./NosAcompañan.css"

// imgs
import estand_baliarda from "./imgs/estand_baliarda.png"
import estand_ciudad from "./imgs/estand_ciudad.png"
import Estand_gador from "./imgs/Estand_gador.png"
import estand_guaymallen from "./imgs/estand_guaymallen.png"
import estand_lepettit from "./imgs/estand_lepettit.png"
import estand_maipu from "./imgs/estand_maipu.png"
import estand_roemers from "./imgs/estand_roemers.png"
import Insignia_lujan from "./imgs/Insignia_lujan.png"


export default function NosAcompañan() {
    return (
        <section id="NosAcompañan">
            <h2>Nos Acompañan:</h2>
            <div className="imgs">
                <img src={estand_baliarda} alt="" />
                <img src={Estand_gador} alt="" />
                <img src={estand_lepettit} alt="" />
                <img src={estand_roemers} alt="" />
                <img src={estand_ciudad} alt="" />
                <img src={estand_guaymallen} alt="" />
                <img src={estand_maipu} alt="" />
                <img src={Insignia_lujan} alt="" />
            </div>
        </section>
    )
}