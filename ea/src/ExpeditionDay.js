import React, { Component } from 'react';
import './ExpeditionDay.css';
import ExpeditionActivity from './ExpeditionActivity';
import './ExpeditionActivity.css';


class ExpeditionDay extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;    
    this.state = {
      listIsHidden: true,
      editMode: false,
      showList: false
    };
    // this.handleClick = this.handleClick.bind(this);
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
        if ( props.mode === 'edit' ) {
          // edit mode with data
          return (
            <div className="ExpeditionDay-list" >
              {activities.map(function(object, i){
                return <div className={"row"} key={object.type.toString()}> 
                    {[ object.name ,
                        // calls each activity component
                        <ExpeditionActivity data={props.activities[i]} mode="edit" />
                    ]}
                  </div>; 
                })}
            </div>
          );
        } else {
          // display mode with data
          return (
            <div className="ExpeditionDay-list" >
              {activities.map(function(object, i){
                return <div className={"row"} key={i}> 
                    {[ object.name ,
                        // calls each activity component
                        <ExpeditionActivity data={props.activities[i]} mode="display" />
                    ]}
                  </div>; 
                })}
            </div>
          );
        }
        
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

              <span className="ExpeditionDay-date"
                onClick={(e) => this.toggleList(e)}
                >
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
            <div className={dateClassNames}>
              <span className="ExpeditionDay-date">
                {this.props.data.date}
              </span>&nbsp;

              (<span className="ExpeditionDay-activity-count">{this.props.data.activities.length} activities</span>)
              <button 
                className="ExpeditionDay-button"
                onClick={(e) => this.toggleList(e)}
                >
                  show
              </button>
              <button 
                className="ExpeditionDay-button"
                onClick={(e) => this.toggleMode(e)}
                >
                  edit
              </button>
            </div>
            
          </div>
        );

      } else {
        // show date and list
        return (
          <div className="ExpeditionDay-wrapper">
            <div className={dateClassNames}>

              <span className="ExpeditionDay-date">
                {this.props.data.date}
              </span>&nbsp;

              (<span className="ExpeditionDay-activity-count">{this.props.data.activities.length} activities</span>)
              <button 
                className="ExpeditionDay-button"
                onClick={(e) => this.toggleList(e)}
                >
                  hide
              </button>
              <button 
                className="ExpeditionDay-button"
                onClick={(e) => this.toggleMode(e)}
                >
                  edit
              </button>
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