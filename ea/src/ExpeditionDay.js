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
      showList: false,
      shouldUpdate: false
    };
  }

  toggleList(e) {
    e.preventDefault();
    this.toggleHidden();
    
  };

  toggleHidden() {
    this.setState({
      listIsHidden: !this.state.listIsHidden
    })
  }

  toggleMode(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    })
  }

  ActivityList(props) {
      
      const activities = props.activities;

      // console.log(props.mode);

      if (activities.length) {
        // if there is data, show stuff
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
      }
    }

    

  renderThing() {

    const dateClassNames = 'ExpeditionDay-launcher';
    const activities = this.props.data.activities

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
        // show date
        // === collapsed view
        // ==================
        return (
          <div className="ExpeditionDay-wrapper">
            <div className={dateClassNames}
            >

              {
                ! this.props.data.activities.length > 0 && (
                  <div 
                    className="DayList-item__icon"
                    title="Nothing planned for this day"
                    >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                  </div>
                )
              }

              {
                this.props.data.activities.length > 0 && (
                  <button 
                    className="ExpeditionDay-button btn-ExpandCollapse"
                    onClick={(e) => this.toggleList(e)}
                    title="show more"
                    >
                      <svg width="24" height="24" viewBox="0 0 48 48"><path d="M33.17 17.17L24 26.34l-9.17-9.17L12 20l12 12 12-12z"/></svg>
                  </button>
                )
              }

              <DeleteDay 
                data={this.data} 
                date={this.props.data.fullDate}
                deleteItem={this.props.deleteItem}
                updateParent={this.updateParent}
                />

              <span className="ExpeditionDay-date">
                {this.props.data.date}
              </span>&nbsp;
              (<span className="ExpeditionDay-activity-count">{this.props.data.activities.length} activities</span>)
              {
                ! this.props.data.activities.length > 0 && (
                  <a href="foobar"
                    className="AddActivity"
                    onClick={this.handleChange}
                    >
                    add an activity
                  </a>
                )
              }

            </div>
            
          </div>
        );

      } else {
        // show date and list
        // === expanded view
        // =================
        return (
          <div className="ExpeditionDay-wrapper">
            <div className={dateClassNames}
              >
              <button 
                className="ExpeditionDay-button btn-ExpandCollapse"
                onClick={(e) => this.toggleList(e)}
                title="show less"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path d="M24 16L12 28l2.83 2.83L24 21.66l9.17 9.17L36 28z"/></svg>
              </button>

              

              <DeleteDay 
                data={this.data} 
                date={this.props.data.fullDate}
                deleteItem={this.props.deleteItem}
                updateParent={this.updateParent}
                />

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