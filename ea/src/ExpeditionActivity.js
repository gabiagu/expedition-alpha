import React, { Component } from 'react';
import './ExpeditionActivity.css';

class ExpeditionActivity extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;    
  }

  render() {

    console.log(this.props.data);

    //console.log(this.props.data.Alpha001.days[0].date);
    //console.log(this.props.data.Alpha001.days[0].activities[0].activity1[0].notes);


    return (
      <div>
        
      </div>
    );
  }
}

export default ExpeditionActivity;