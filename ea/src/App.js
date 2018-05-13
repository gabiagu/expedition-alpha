import React, { Component } from 'react';
// import list of expeditions
import ExpeditionList from './ExpeditionList';
import './ExpeditionList.css';
// import expedition content static for now
import ExpeditionPage from './ExpeditionPage';
import './ExpeditionPage.css';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Expeditii</h1>
        </header>
        <div className="App-content">
          <ExpeditionPage />
        </div>
      </div>
    );
  }
}

export default App;
