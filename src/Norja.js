import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Valtiolista from './Components/Valtiolista';
import Grid from 'react-css-grid'
import Norjan from './Components/Norja';
import Palautelomake from './Components/Palautelomake';





const tie = [
  { paakaupunki: 'Oslo',
    muoto: 'perustuslaillinen monarkia',
    pintaAla: '323 787 km2',
    vakiluku: '5 302 778 miljoona',
    valuutta: ' 	Norjan kruunu (NOK)',
    aikaVyohyke:'UTC+1',
    lyhenne:'NO',
    muitaKaupunkeja:' Bergen, Trondheim  '
  }
];
class Norja extends Component {
  render() {
    return (
      <div className="App">













        <header className="App-header">
        <h1>Norja</h1>
        </header>

    <div class="grid-container">
    <div class="grid-item"><p1>Perustiedot</p1>
      <p><Valtiolista tiedot={tie}/></p>
    </div>
    <div class="grid-item"><p1>Säätiedot</p1>
      <Norjan/>
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

export default Norja;
