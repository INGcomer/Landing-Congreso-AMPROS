// CSS
import "./Salon.css"
// img
import salon from "./imgs/pexels-steven-hylands-1650904.jpg"
// ICONS

export default function Salon() {
    return (
        <section id="Salon">
            <a href="https://goo.gl/maps/skvER97HX9PmEx758" className="texto">
                <h1> ¿Donde se realizara el evento? </h1>
                <p> El ampros construllo un salon de eventos buenisimo y quieren que todos lo vean </p>
            </a>
            <div className="mainImg">
                <img src={salon} alt="" />
            </div>

            <div id="Ubicacion">
            <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.2515620822302!2d-68.78128118813041!3d-33.02996585503339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e73a636a5a81d%3A0x781563d83c3e0d97!2sAMProS%20Finca!5e0!3m2!1sen!2sar!4v1684882485287!5m2!1sen!2sar"
                    width="100%"
                    height="100%"
                    style={{
                        border: 0
                    }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>

                {/* <h1> Ubicacion </h1> */}

            </div>
        </div>
        </section>
    )
}