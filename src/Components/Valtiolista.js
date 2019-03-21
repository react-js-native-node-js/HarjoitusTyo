import React  from 'react';


function Valtiolista (props) {
  let tietoja = props.tiedot.map(function (tieto,index) {
    return (<p key={index}>
        Pääkaupunki: {tieto.paakaupunki}<br/>
        Valtiomuoto: {tieto.muoto}<br/>
        Pinta-ala: {tieto.pintaAla}<br/>
        Väkiluku: {tieto.vakiluku}<br/>
        Valuutta: {tieto.valuutta}<br/>
        Aikavyöhyke: {tieto.aikaVyohyke}<br/>
        Lyhenne: {tieto.lyhenne}<br/>
        Muita kaupunkeja:{tieto.muitaKaupunkeja}
        </p>);
      });
      return (<div>{tietoja}</div>);
}
export default Valtiolista;
