// CSS
import "./Header.css"
// MUI
import Button from '@mui/material/Button';
// icons
import SendIcon from '@mui/icons-material/Send';
// IMGs
import fondo from "./imgs/fondo.svg"
// import fondo from "./imgs/fondo_sin_gradient.svg"
import logo_completo from "./imgs/logo congreso completo.svg"

export default function Header() {
    return (
        <section id='header'>
            {/* <div className='fondo'> </div> */}

            {/* <div className="content">
                <div className='derecha'>

                </div>
                <div className='izquierda'>
                    <h1> gancho comercial </h1>
                    <p> Este es el primer congreso de salud mental organizado por AMPROS  </p>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Inscrivirse
                    </Button>
                </div>
            </div> */}

            <img src={logo_completo} alt="" className="logo" />
            <img src={fondo} alt="" className="fondo" />
        </section>
    )
}