import React, { Component } from 'react';
// import list of expeditions
// import ExpeditionList from './ExpeditionList';
// import './ExpeditionList.css';
// import expedition content static for now
import ExpeditionPage from './ExpeditionPage';
import './ExpeditionPage.css';
import './App.css';

const data = require('./sample_data.json');

// console.log(data);

class App extends Component {

  constructor(props) {
      super(props);
      this.data = data;    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Expeditii</h1>
        </header>
        <div className="App-content">
          <ExpeditionPage data={this.data} />
        </div>
      </div>
    );
  }
}

export default App;
