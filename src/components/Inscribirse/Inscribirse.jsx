// CSS
import "./Inscribirse.css"


export default function Inscribirse({texto, variante}) {
    return(
        <section id="Inscribirse" className={variante}>
            {/* <h2> ¡No pierdas! </h2> */}
            <h2> {texto} </h2>

            <a href="">
                INSCRIBIRSE
            </a>
        </section>
    )
}