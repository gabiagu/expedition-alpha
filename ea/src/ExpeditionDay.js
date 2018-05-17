import React, { Component } from 'react';
import './ExpeditionDay.css';
import ExpeditionActivity from './ExpeditionActivity';
import './ExpeditionActivity.css';

class ExpeditionDay extends Component {

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
        <div className="foobar">
          
        </div>
        <div className="activity_list">
          <ExpeditionActivity data={this.data} />
        </div>
      </div>
    );
  }
}

export default ExpeditionDay;