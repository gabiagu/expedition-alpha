import React, { Component } from 'react';
import './ExpeditionList.css';

class ExpeditionList extends Component {
  
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    // should load an expedition page
  }

  render() {
    return (
      <ul className="foobar">
        <li>
          <button onClick={this.handleClick}>
            Click me
          </button>
        </li>
      </ul>
    );
  }
}

export default ExpeditionList;
