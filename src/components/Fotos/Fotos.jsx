// // import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// // register Swiper custom elements
// register();


// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// framer motion
import { motion } from "framer-motion"
// CSS
import "./Fotos.css"
// Sponsos
import ingcome from './img/ingcome.png'
import PlaceHolder from './img/PlaceHolder.png'

export default function Fotos() {
    return (
        <section id="Fotos">
            <h1> Lo que fue el evento </h1>

            <ul>
                <li>
                    <h2> Dia uno </h2>
                </li>
            </ul>

            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                {/* <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide> */}
            </Swiper>

            <ul>
                <li>
                    <h2> Dia dos </h2>
                </li>
            </ul>

            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
            </Swiper>


            <ul>
                <li>
                    <h2> Dia tres </h2>
                </li>
            </ul>


            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
            </Swiper>

            <ul>
                <li>
                    <h2> Cena de cierre </h2>
                </li>
            </ul>


            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={PlaceHolder} alt="" /> </SwiperSlide>
            </Swiper>



            <div className="container">
                <motion.a
                    href=""
                    whileHover={{ scale: 1.05 }}
                >
                    Ver mas
                </motion.a>
            </div>

        </section>
    )
}