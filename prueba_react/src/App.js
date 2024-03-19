import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import ListPersonas from './Page/Personas/ListPersonas';
import FormVentas from './Page/Ventas/FormVentas';
import { Component } from 'react';
import { PersonaService } from './Service/PersonaService';

/*function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<ListPersonas />} />
            <Route path='Ventas' element={<FormVentas />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}*/

export default class App extends Component {
  constructor() {
    super();
    this.setState({
      personas: []
    });
    this.personaService = new PersonaService();
  }

  componentDidMount() {
    this.personaService.getAll().then(data => {
      console.log(data);
    })
  }

  render() {
    return (
      <h1>Hola Mundo</h1>
    );
  }
}

//export default App;
