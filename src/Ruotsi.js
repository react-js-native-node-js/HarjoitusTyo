import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Valtiolista from './Components/Valtiolista';
import Grid from 'react-css-grid'
import Ruotsin from './Components/Ruotsi';
import Palautelomake from './Components/Palautelomake';





const tie = [
  { paakaupunki: 'Tukholma',
    muoto: 'perustuslaillinen monarkia',
    pintaAla: '450 295 km2',
    vakiluku: '9 967 274 miljoona',
    valuutta: ' Ruotsin kruunu (SEK)',
    aikaVyohyke:'UTC+1',
    lyhenne:'SE',
    muitaKaupunkeja:' Göteborg, Malmö, Uppsala '
  }
];
class Ruotsi extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Ruotsi</h1>
        </header>

    <div class="grid-container">
    <div class="grid-item"><p1>Perustiedot</p1>
      <p><Valtiolista tiedot={tie}/></p>
    </div>
    <div class="grid-item"><p1>Säätiedot</p1>
      <Ruotsin/>
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

export default Ruotsi;
