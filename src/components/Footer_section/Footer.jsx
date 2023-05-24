// MUI
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

// css
import './Footer.css';

export default function FooterSection() {
    return (
        <section id='footer'>
            <div className='menu_container'>
                <div className="callToAccion">
                    <Button
                        type='link'
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ m: 1, width: '50%' }}
                        // endIcon={<SendIcon />}
                    >
                        INSCRIBIRSE
                    </Button>
                </div>
                <div className="redes">
                    <a href="">
                        <InstagramIcon/>
                    </a>
                    <a href="">
                        <LinkedInIcon/>
                    </a>
                </div>
                <div className="texto">
                    <div>
                        <FmdGoodOutlinedIcon/>
                        <span>
                            Mendoza, Argentina
                        </span>
                    </div>
                    <div>
                        <EmailOutlinedIcon/>
                        <span>
                        contacto@incomer.com.ar
                        </span>
                    </div>
                </div>
            </div>

            <div className='linea'></div>

            <div className="ingcome_sofweare">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.4 147.15">
                        <g id="Capa_2" data-name="Capa 2">
                            <g id="Layer_1" data-name="Layer 1">
                                <rect class="cls-1" x="66.84" y="0.85" width="12.21" height="56.96" />
                                <polygon class="cls-1" points="100.53 19.04 127.57 57.8 139.87 57.8 139.87 0.85 128.15 0.85 128.15 40.43 100.53 0.85 88.64 0.85 88.64 57.8 100.53 57.8 100.53 19.04" />
                                <path class="cls-1" d="M195.71,51v7.54H204V28.47H174.53v8.35H191a15.63,15.63,0,0,1-2.18,4.72A16,16,0,0,1,183,46.7a16.51,16.51,0,0,1-7.78,1.84,16,16,0,0,1-8.69-2.37,15.48,15.48,0,0,1-5.78-6.64,20.89,20.89,0,0,1-1.84-9.67,22.62,22.62,0,0,1,2.33-9.22,16.11,16.11,0,0,1,14.72-9,15.71,15.71,0,0,1,7.33,1.64,13.67,13.67,0,0,1,4.92,4.14,14.22,14.22,0,0,1,2.33,5.12H202.4A26.16,26.16,0,0,0,189.65,4.17,25.44,25.44,0,0,0,176.42.85a29.67,29.67,0,0,0-15.49,4,28.24,28.24,0,0,0-10.41,10.66,30.38,30.38,0,0,0-3.85,14.34,31,31,0,0,0,3.28,15,25.7,25.7,0,0,0,10,10.65,29.39,29.39,0,0,0,15.25,3.89A27.71,27.71,0,0,0,195.71,51Z" />
                                <path class="cls-1" d="M82.13,78a13.92,13.92,0,0,1,7.17-1.84,13,13,0,0,1,5.9,1.31,12.69,12.69,0,0,1,4.3,3.4,9.65,9.65,0,0,1,2.09,4.47h11.23A19.24,19.24,0,0,0,109,75.77a22.94,22.94,0,0,0-8.4-6.89,25.68,25.68,0,0,0-11.47-2.54,26.52,26.52,0,0,0-12.91,3.07,22.75,22.75,0,0,0-8.77,8.32,23.26,23.26,0,0,0-3.32,11.56A22.53,22.53,0,0,0,67.05,101a21.45,21.45,0,0,0,8.48,8.28,26,26,0,0,0,12.79,3,26.35,26.35,0,0,0,11.43-2.5,23.27,23.27,0,0,0,8.69-7,20.13,20.13,0,0,0,4-10h-10.9A13.64,13.64,0,0,1,97,99.74a12.82,12.82,0,0,1-8.32,2.74,14.29,14.29,0,0,1-7-1.68A11,11,0,0,1,77,96.13a14.55,14.55,0,0,1-1.56-6.84,13.33,13.33,0,0,1,1.8-6.43A13.1,13.1,0,0,1,82.13,78Z" />
                                <path class="cls-1" d="M157.4,69.37a29.44,29.44,0,0,0-26,0,23.48,23.48,0,0,0-9.09,8.28,21.78,21.78,0,0,0-3.4,11.64,22.4,22.4,0,0,0,3.31,11.6,23.08,23.08,0,0,0,9,8.36,26.89,26.89,0,0,0,12.87,3.07,27.3,27.3,0,0,0,13-3.07,23.3,23.3,0,0,0,9.06-8.36,22.37,22.37,0,0,0,.21-23.24A22.4,22.4,0,0,0,157.4,69.37ZM155.72,96a12.8,12.8,0,0,1-4.87,4.79,14,14,0,0,1-7,1.77,13.64,13.64,0,0,1-6.93-1.77A12,12,0,0,1,132.16,96a13.33,13.33,0,0,1-1.56-6.72,13.82,13.82,0,0,1,1.89-6.76,13.06,13.06,0,0,1,4.92-4.84,14.07,14.07,0,0,1,7-1.76,13.42,13.42,0,0,1,6.93,1.76,12.27,12.27,0,0,1,4.63,4.8,13.51,13.51,0,0,1,1.56,6.8A13.75,13.75,0,0,1,155.72,96Z" />
                                <path class="cls-1" d="M235,66.34a17.33,17.33,0,0,0-9.68,2.83,19.72,19.72,0,0,0-6.91,8,17.32,17.32,0,0,0-2.84-5.72q-4-5.16-11.72-5.16a17.47,17.47,0,0,0-9.75,2.83,19.2,19.2,0,0,0-5.74,5.91V67.9H176.25v42.86h12.13V91q.17-7,3.32-11a10,10,0,0,1,8.24-4,6.35,6.35,0,0,1,5.74,2.79,14.1,14.1,0,0,1,1.8,7.7v24.26h12.13V91q.16-7.12,3.19-11.06A9.72,9.72,0,0,1,230.92,76c2.67,0,4.63.89,5.86,2.67s1.84,4.38,1.84,7.82v24.26h12.21V85.11q0-9-4.05-13.89T235,66.34Z" />
                                <path class="cls-1" d="M306.4,89.37a23.16,23.16,0,0,0-2.71-11.27,21.34,21.34,0,0,0-8.27-8.52,25.53,25.53,0,0,0-13.2-3.24,25.84,25.84,0,0,0-12.7,3.12,23.21,23.21,0,0,0-8.85,8.36,22.16,22.16,0,0,0-3.28,11.47,21.92,21.92,0,0,0,2.91,11.88,21.28,21.28,0,0,0,8.73,8.2,27.91,27.91,0,0,0,13.11,2.95,29.85,29.85,0,0,0,12.38-2.58,24.15,24.15,0,0,0,9.09-6.76l-8.85-5.33a15.59,15.59,0,0,1-5.16,3.69,16.66,16.66,0,0,1-7.05,1.47,15.52,15.52,0,0,1-9.3-2.62,9.23,9.23,0,0,1-4-7.13h36.64A16.41,16.41,0,0,0,306.4,89.37Zm-37-3.61a13,13,0,0,1,4.67-7.33,13.45,13.45,0,0,1,8.52-2.75,13,13,0,0,1,6.27,1.44A11,11,0,0,1,293,80.85a9.58,9.58,0,0,1,1.56,4.91Z" />
                                <path class="cls-2" d="M0,99v48.11H36.33V62.71h0A36.34,36.34,0,0,0,0,99Z" />
                                <path class="cls-2" d="M36.33,0H0V62.71H0A36.33,36.33,0,0,0,36.33,26.38Z" />
                                <path class="cls-1" d="M69.47,144a6.12,6.12,0,0,1-2.19-1.21l.7-1.48a5.87,5.87,0,0,0,2,1.11,7.25,7.25,0,0,0,2.44.43,4.45,4.45,0,0,0,2.47-.56,1.75,1.75,0,0,0,.81-1.5,1.51,1.51,0,0,0-.44-1.11,3.09,3.09,0,0,0-1.1-.65c-.44-.15-1.06-.33-1.86-.52a19.4,19.4,0,0,1-2.42-.72,4.06,4.06,0,0,1-1.58-1.11,3,3,0,0,1-.65-2,3.38,3.38,0,0,1,.56-1.92,3.82,3.82,0,0,1,1.7-1.37,6.92,6.92,0,0,1,2.83-.51,9.06,9.06,0,0,1,2.32.3,6,6,0,0,1,1.95.87l-.62,1.52a6.86,6.86,0,0,0-1.79-.8,6.41,6.41,0,0,0-1.86-.28,4.11,4.11,0,0,0-2.42.59,1.8,1.8,0,0,0-.81,1.52,1.42,1.42,0,0,0,.46,1.11,3.09,3.09,0,0,0,1.13.67,18.17,18.17,0,0,0,1.83.5,18.2,18.2,0,0,1,2.41.72,4.11,4.11,0,0,1,1.57,1.1,2.91,2.91,0,0,1,.66,2,3.4,3.4,0,0,1-.57,1.91A3.84,3.84,0,0,1,75.22,144a7.31,7.31,0,0,1-2.85.5A9.12,9.12,0,0,1,69.47,144Z" />
                                <path class="cls-1" d="M88.4,143.6a6.88,6.88,0,0,1-2.53-9.4,6.52,6.52,0,0,1,2.53-2.44,7.44,7.44,0,0,1,3.63-.88,7.37,7.37,0,0,1,3.61.88,6.5,6.5,0,0,1,2.53,2.43,7.15,7.15,0,0,1,0,7,6.5,6.5,0,0,1-2.53,2.43,7.37,7.37,0,0,1-3.61.88A7.44,7.44,0,0,1,88.4,143.6Zm6.26-1.48a4.85,4.85,0,0,0,1.85-1.83,5.42,5.42,0,0,0,0-5.22,5,5,0,0,0-1.85-1.84,5.24,5.24,0,0,0-2.63-.66,5.37,5.37,0,0,0-2.65.66,4.91,4.91,0,0,0-1.86,1.84,5.35,5.35,0,0,0,0,5.22,4.81,4.81,0,0,0,1.86,1.83,5.27,5.27,0,0,0,2.65.67A5.15,5.15,0,0,0,94.66,142.12Z" />
                                <path class="cls-1" d="M109.62,132.68v4.64h6.67V139h-6.67v5.38h-1.89V131h9.38v1.65Z" />
                                <path class="cls-1" d="M128.26,132.68H123.7V131h11v1.65h-4.56v11.65h-1.88Z" />
                                <path class="cls-1" d="M161.15,131l-4.44,13.3h-2l-3.63-10.62-3.63,10.62h-2L141,131h2l3.59,10.81L150.27,131H152l3.67,10.87L159.35,131Z" />
                                <path class="cls-1" d="M177.26,141H170.2l-1.47,3.33h-1.95l6-13.3h1.88l6,13.3h-2Zm-.66-1.52L173.73,133l-2.87,6.51Z" />
                                <path class="cls-1" d="M197.33,144.33l-2.87-4.09c-.36,0-.63,0-.84,0h-3.28v4.05h-1.9V131h5.18a6.18,6.18,0,0,1,4.07,1.23,4.19,4.19,0,0,1,1.48,3.4,4.46,4.46,0,0,1-.76,2.63,4.31,4.31,0,0,1-2.17,1.57l3.16,4.47Zm-1-6.44a2.73,2.73,0,0,0,1-2.23,2.69,2.69,0,0,0-1-2.21,4.29,4.29,0,0,0-2.75-.77h-3.23v6h3.23A4.23,4.23,0,0,0,196.32,137.89Z" />
                                <path class="cls-1" d="M217.64,142.68v1.65H208V131h9.38v1.65h-7.48v4.09h6.67v1.61h-6.67v4.3Z" />
                            </g>
                        </g>
                    </svg>
                </a>
            </div>

        </section>
    )
}