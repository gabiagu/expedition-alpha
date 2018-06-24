import React, { Component } from 'react';
import './ExpeditionDay.css';
import ExpeditionActivity from './ExpeditionActivity';
import './ExpeditionActivity.css';
import DeleteDay from './forms/DeleteDay';
import './forms/DeleteDay.css';
// import axios from 'axios';



class ExpeditionDay extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.fullDataSet = this.props.fullDataSet;    
    this.state = {
      listIsHidden: true,
      editMode: this.props.editmode,
      showList: false
    };
    // this.handleClick = this.handleClick.bind(this);
    // console.log(this.state.editMode);
  }

  

  toggleList(e) {
    e.preventDefault();
    // toggle list of activities
    this.toggleHidden();
    
  };

  toggleHidden() {
    this.setState({
      listIsHidden: !this.state.listIsHidden
    })
    // console.log(this.state.listIsHidden);
  }

  toggleMode(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    })
    // console.log(this.state.listIsHidden);
  }

  ActivityList(props) {
      
      const activities = props.activities;

      // console.log(props.mode);

      if (activities.length) {
        // if there is data, show stuff
        // console.log(props.editmode)
        
        // display mode with data
        return (
          <div className="ExpeditionDay-list" >
            {activities.map(function(object, i){
              return <div className={"row"} key={object.activityId}> 
                  {[ object.name ,
                      // calls each activity component
                      <ExpeditionActivity data={props.activities[i]} mode="display" />
                  ]}
                </div>; 
              })}
          </div>
        );
        
        
      } else {
        // edit mode without data
        return (
          <div className="ExpeditionDay-list" >
            <ExpeditionActivity mode="edit" />
          </div>
        );
      }
    }

    

  renderThing() {

    const dateClassNames = 'ExpeditionDay-launcher';
    const activities = this.props.data.activities
    // this renders the things

    if ( this.state.editMode ) {
      // edit mode
      return (
        <div className="ExpeditionDay-wrapper">
            <div className={dateClassNames}>

              <span className="ExpeditionDay-date">
                {this.props.data.date}
              </span>&nbsp;

              (<span className="ExpeditionDay-activity-count">{this.props.data.activities.length} activities</span>)
              <button 
                className="ExpeditionDay-button"
                onClick={(e) => this.toggleMode(e)}
                >
                  save
              </button>

            </div>
            
            <div> 
              <this.ActivityList activities={activities} mode="edit" />
            </div>
          </div>
      );

    } else {
      // display mode

      if ( this.state.listIsHidden ) {
        // show only date
        return (
          <div className="ExpeditionDay-wrapper">
            <div className={dateClassNames}
            >

              <button 
                className="ExpeditionDay-button"
                onClick={(e) => this.toggleList(e)}
                title="expand"
                >
                  >
              </button>

              <DeleteDay data={this.data} date={this.props.data.fullDate} />

              <span className="ExpeditionDay-date">
                {this.props.data.date}
              </span>&nbsp;

              (<span className="ExpeditionDay-activity-count">{this.props.data.activities.length} activities</span>)
              
            </div>
            
          </div>
        );

      } else {
        // show date and list
        return (
          <div className="ExpeditionDay-wrapper">
            <div className={dateClassNames}
              >
              <button 
                className="ExpeditionDay-button"
                onClick={(e) => this.toggleList(e)}
                title="collapse"
                >
                  ^
              </button>

              <DeleteDay data={this.data} date={this.props.data.fullDate} />

              <span className="ExpeditionDay-date">
                {this.props.data.date}
              </span>&nbsp;

              (<span className="ExpeditionDay-activity-count">{this.props.data.activities.length} activities</span>)
              
              
            </div>
            
            <div>
              <this.ActivityList activities={activities} mode="display" />
            </div>
          </div>
        );

      }
      
    }
  };

  render() {

    // console.log(this.props.data);

    return (

      this.renderThing()
      
    );
  }
}

export default ExpeditionDay;