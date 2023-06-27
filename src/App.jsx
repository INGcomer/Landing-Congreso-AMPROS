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
import Footer from './components/Footer/Footer';
import FooterSection from './components/Footer_section/Footer';
import Salon from './components/donde/salon/Salon';
import Disertantes from './components/Disertantes/Disertantes';
import Inscribirse from './components/Inscribirse/Inscribirse';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header/>

      <Inscribirse texto="¡Se parte del primer congreso de salud mental del AMProS!" variante="blanco"/>

      {/* <Autoridades/> */}

      <Tematica/>

      <Disertantes/>

      <Inscribirse texto="¡Hay solo 600 entradas disponibles!" variante="claro"/>

      <Cronograma/>

      <Actividades/>  

      <Salon/> 

      <Entrada/>   

      <Inscribirse texto="¡No te quedes sin entrada!" variante="oscuro"/>

      <FooterSection/>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
