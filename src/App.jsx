// custom css
import './App.css';
// Components
import Navbar from './components/Nabvar/Nabvar';
import Header from './components/Header/Header';
import Cronograma from './components/cronograma/Cronograma';
import Tematica from './components/Tematica/Tematica';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header/>

      <Tematica/>
      

      {/* <section id='Cronograma'>
        <Cronograma/>
      </section> */}

      <Footer/>
    </div>
  );
}

export default App;
