// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
// CSS
import "./Fotos.css"

export default function Fotos() {
    return (
        <section id="Fotos">
            <h1> Lo que fue el evento </h1>

            <h2> Dia uno </h2>

            <swiper-container
                slides-per-view="3"
                speed="500" 
                loop="true"
                navigation="true" pagination="true" scrollbar="true"
            >
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
            </swiper-container>

            <h2> Dia dos </h2>

            <h2> Dia tres </h2>

        </section>
    )
}