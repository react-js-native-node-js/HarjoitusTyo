import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Valtiolista from './Components/Valtiolista';
import Grid from 'react-css-grid'
import Suomi from './Components/Suomi';
import Palautelomake from './Components/Palautelomake';





const tie = [
  { paakaupunki: 'Helsinki',
    muoto: 'Tasavalta',
    pintaAla: '338 448,72 km2',
    vakiluku: '5 522 858',
    valuutta: 'euro',
    aikaVyohyke:'UTC+2',
    lyhenne:'FI, FIN',
    muitaKaupunkeja:'Espoo,Tampere,Turku, Oulu, Jyväskylä'
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Suomi</h1>
        </header>

    <div class="grid-container">
    <div class="grid-item"><p1>Perustiedot</p1>
      <p><Valtiolista tiedot={tie}/></p>
    </div>
    <div class="grid-item"><p1>Säätiedot</p1>
      <Suomi/>
    </div>
  </div>

  <div class="grid-container">
  <div class="grid-item"><p1>Lomake</p1>
  <Palautelomake />
  </div>
  <div class="grid-item">
  <p1> </p1>

  </div>
</div>
      </div>

    );
  }
}

export default App;
