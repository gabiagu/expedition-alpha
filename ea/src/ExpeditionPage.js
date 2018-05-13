import React, { Component } from 'react';
import './ExpeditionPage.css';

class ExpeditionPage extends Component {
  
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    // should load an expedition page
  }

  render() {

    const DayList = ([
      "Aug 22", "Aug 23", "Aug 24"
    ]);

    return (
      <div>
        <div className="ExpeditionPage-header">
          Route Alpha
        </div>
        <div className="ExpeditionPage-content">
          {DayList}
        </div>
      </div>
    );
  }
}

export default ExpeditionPage;