import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// this pulls in data
const data = require('./sample_data.json');
// console.log(json);


ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
