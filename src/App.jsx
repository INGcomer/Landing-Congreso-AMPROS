// MUI
import Button from '@mui/material/Button';
// icons
import SendIcon from '@mui/icons-material/Send';
// custom css
import './App.css';
// Components
import Navbar from './components/Nabvar';
import Cronograma from './components/cronograma/Cronograma';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id='header'>
        <div className='derecha'>

        </div>
        <div className='izquierda'>
          <h1> gancho comercial </h1>
          <p> Este es el primer congreso de salud mental organizado por AMPROS  </p>
          <Button variant="contained" endIcon={<SendIcon />}>
            Inscrivirse
          </Button>
        </div>
      </section>

      <section id='Cronograma'>
        <Cronograma/>
      </section>
    </div>
  );
}

export default App;
