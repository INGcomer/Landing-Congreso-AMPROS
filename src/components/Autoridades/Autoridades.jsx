import { motion } from "framer-motion"
// CSS
import "./Autoridades.css"
// IMGs
import placeholder from './img/Blues cover.jpg'
import fondo from './img/fondo.svg'

export default function Autoridades() {
    return (
        <section id="Autoridades">
            <h1> Autoridades </h1>
            <div className="comicion_directiva">
                <motion.div
                    className="precidente"
                    initial={{ x: '-150%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >

                    <h2> Presidente </h2>
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </motion.div>
                <motion.div 
                    className="viceprecidente"
                    initial={{ x: '150%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2> Vice Presidente </h2>
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </motion.div>
            </div>
            <motion.div 
                className="comicion_cientifica"
                initial={{ y: '50%' }}
                whileInView={{ y: '0%' }}
                transition={{ duration: 0.5 }}
            >
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>
                <div className="pichi">
                    <img src={placeholder} alt="" />
                    <p>
                        <strong> B.B King </strong> <br />
                        Renombrado músico y compositor
                    </p>
                </div>

            </motion.div>

            <img src={fondo} alt="" className="fondo" />
        </section>
    );
}
