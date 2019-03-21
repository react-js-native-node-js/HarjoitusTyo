import React, { Component } from 'react';


class Palautelomake extends Component {
  constructor (props){
    super(props);
    this.state = {enimi:'',snimi:'',sposti:'',kohde:'',vpalaute:''};
  }

  muutaEnimi = (e) => {
    this.setState({enimi: e.target.value.toUpperCase()});

  }
  muutaSnimi = (e) => {
    this.setState({snimi: e.target.value.toUpperCase()});
  }

  muuta = (e) => {
      this.setState( { [e.target.name]: e.target.value} );
  }

  tyhjenna = (e) => {
    e.preventDefault();
    this.setState( { enimi: '', snimi:'', sposti:'', kohde:'', vpalaute: ''} );
  }

  Lisaa = (e) =>{
    e.preventDefault();
    this.setState( { enimi: '', snimi:'', sposti:'', kohde:'', vpalaute: ''} );
  }

  render() {
    return (
      <form >
        <label htmlFor='enimi' style={styles.labelStyle}>Otsikko</label>
        <input type='text' name='enimi' value={this.state.enimi} onChange={this.muutaEnimi}  />
        <br />
        <label htmlFor='snimi' style={styles.labelStyle}>Päivä</label>
        <input type='text' name='snimi' value={this.state.snimi} onChange={this.muutaSnimi} />
        <br />
        <label htmlFor='sposti' style={styles.labelStyle}>Paikka</label>
        <input type='text' name='sposti' value={this.state.sposti} onChange={this.muuta} />
        <br />
        <label htmlFor='kohde' style={styles.labelStyle}>Sää</label>
        <input type='text' name='kohde' value={this.state.kohde} onChange={this.muuta} />
        <br />
        <label htmlFor='vpalaute' style={styles.labelStyle}>Kuvaus</label>
        <textarea name='vpalaute' rows='4' cols='40' value={this.state.vpalaute} onChange={this.muuta}></textarea>
        <br />
        <input type='button' value='Lisaa' onClick={this.Lisaa} />
        &nbsp;
        <input type='button' value='Tyhjennä' onClick={this.tyhjenna} />
      </form>
    );
  }
}

const styles = {
  labelStyle: {
    width: '8em',
    display: 'block',
    float: 'left',
  },
};
export default Palautelomake;
