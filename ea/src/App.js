import React, { Component } from 'react';
import ExpeditionPage from './ExpeditionPage';
import './ExpeditionPage.css';
import './App.css';
import axios from 'axios';



// axios.get('http://localhost:3004/Alpha001')
//   .then(res => {
//         const data = res.data;
//         // this.setState({ data });
//         console.log(res.data);
//       })
//   .catch(function (error) {
//     console.log(error);
//   });

// componentDidMount() {
//     axios.get('http://localhost:3004/Alpha001')
//       .then(res => {
//         const data = res.data;
//         this.setState({ data });
//         console.log('this eventually comes in: '+data);
//       })
//   }  

// console.log(data);

// const data = require('./sample_data.json');

// console.log(data);

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://localhost:3004/Alpha001')
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  render() {

    // console.log(this.state.data);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Expeditii</h1>
        </header>
        { this.state && this.state.data.days && 
          <div className="App-content">
            <ExpeditionPage data={this.state.data} />
          </div>
        }
      </div>
    );
  }
}

export default App;
