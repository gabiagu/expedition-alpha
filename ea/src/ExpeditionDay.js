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

    // console.log(this.props.data);

    // console.log(this.props.data.date);

    function handleClick(e) {
      e.preventDefault();
      console.log('The button was clicked.');
      // shows list of activities
    };

    function ActivityList(props) {
      
      // const activities = props.activities;

      return (
      <div>
        {activities.map(function(object, i){

          return <div className={"row"} key={i}> 
              {[ object.name ,
                  // remove the key
                  //<b className="fosfo" key={i}> {object.activity} </b> , 
                  //object.notes

                  // console.log(props.days.activities[0].length),

                  // console.log(object.type),

                  <ExpeditionActivity data={props.activities[i]} />

              ]}
            </div>; 
          })}
      </div>
      );

    }

    const activities = this.props.data.activities;

    return (
      <div>
        <div className="foobar">
          <a className="ExpeditionDay-launcher" 
            href="##" 
            onClick={handleClick}
            >

            <span className="ExpeditionDay-date">{this.props.data.date}</span>&nbsp;

            (<span className="ExpeditionDay-activity-count">{this.props.data.activity_total} activities</span>)

          </a>
        </div>
        <div className="ExpeditionDay-list">
          <ActivityList activities={activities} />
        </div>
      </div>
    );
  }
}

export default ExpeditionDay;