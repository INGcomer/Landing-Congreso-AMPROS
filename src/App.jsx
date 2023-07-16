// custom css
import './App.css';
// Components
import Navbar from './components/Nabvar/Nabvar';
import Header from './components/Header/Header';
import Autoridades from './components/Autoridades/Autoridades';
import Cronograma from './components/cronograma/Cronograma';
import Tematica from './components/Tematica/Tematica';
import Actividades from './components/Actividades/Actividades';
import Entrada from './components/Entrada/Entrada';
import FooterSection from './components/Footer_section/Footer';
import Salon from './components/donde/salon/Salon';
import Disertantes from './components/Disertantes/Disertantes';
import Inscribirse from './components/Inscribirse/Inscribirse';
import Actividades2 from './components/Actividades2/Actividades2';
import Bienvenida from './components/PalabrasBienvenida/PalabrasBienvenida';
// Analytics
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-000000-01');
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header/>

      <Bienvenida/>

      <Inscribirse texto="¡Sé parte del primer congreso de salud mental del AMProS!" variante="blanco"/>

      <Autoridades/>

      <Tematica/>

      <Disertantes/>

      <Inscribirse texto="¡Inscríbete ahora! Cupos limitados" variante="claro"/>

      <Cronograma/>

      <Actividades/>  

      <Actividades2/>

      <Inscribirse texto="¡No te quedes sin entrada!" variante="oscuro"/>

      <Salon/> 

      <Entrada/>   

      <Inscribirse texto="¡No te quedes sin entrada!" variante="oscuro"/>

      <FooterSection/>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
