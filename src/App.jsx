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

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header/>

      <Autoridades/>

      <Tematica/>

      <Disertantes/>

      <Cronograma/>

      <Actividades/>  

      <Salon/> 

      <Entrada/>   

      <FooterSection/>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
