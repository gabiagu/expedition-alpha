import React, { Component } from 'react';
import './ExpeditionDay.css';
import ExpeditionActivity from './ExpeditionActivity';
import './ExpeditionActivity.css';

class ExpeditionDay extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;    
    this.state = {
      isHidden: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log(listId);
    e.preventDefault();

    console.log('The button was clicked.');
    console.log(this.data.listId);
    // shows list of activities
  };

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {

    // console.log(this.props.data);

    // console.log(this.props.data.date);

    

    function ActivityList(props) {
      
      // const activities = props.activities;

      return (
      <div className="ExpeditionDay-list" >
        {activities.map(function(object, i){

          return <div className={"row"} key={i}> 
              {[ object.name ,
                  // calls each activity component
                  <ExpeditionActivity data={props.activities[i]} />

              ]}
            </div>; 
          })}
      </div>
      );

    }

    const activities = this.props.data.activities;
    // let listId = this.props.data.listId;

    // console.log(listId);

    return (
      <div>
        <div className="foobar">
          <a className="ExpeditionDay-launcher" href="##" 
            onClick={(e) => this.handleClick(e)}
          >

            <span className="ExpeditionDay-date">{this.props.data.date}</span>&nbsp;

            (<span className="ExpeditionDay-activity-count">{this.props.data.activities.length} activities</span>)

          </a>
        </div>
        
        <ActivityList activities={activities} />
        
      </div>
    );
  }
}

export default ExpeditionDay;