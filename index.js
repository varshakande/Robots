import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Robot from './Robot';
import {robots} from './robots.js';
import Cardlist from './Cardlist';
import Roof from './Roof';
import 'tachyons';

ReactDOM.render(<Roof />,document.getElementById('root'));
registerServiceWorker();
