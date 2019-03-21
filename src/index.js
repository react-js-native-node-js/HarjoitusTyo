import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Suomen from './Components/Suomi';
import * as serviceWorker from './serviceWorker';
import Ruotsin from './Ruotsi';
import Norjan from './Norja';



ReactDOM.render(<Ruotsin />, document.getElementById('root'));
//ReactDOM.render(<Suomen />, document.getElementById('root'));
serviceWorker.unregister();
