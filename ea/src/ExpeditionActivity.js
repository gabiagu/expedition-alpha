import React, { Component } from 'react';
import './ExpeditionActivity.css';
// import axios from 'axios';


class ExpeditionActivity extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;    
    this.state = {
      editMode: false
    };
  }

  toggleMode () {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  RenderActivity(props) {

    var data = props.data;
    // console.log(data);

    const ActivityType = data.type;
    const ActivityDuration = data.time;
    const ActivityNotes = data.notes;

    /*if ( ActivityType === 'flight' ) {
      
       FLIGHT
        - start point (IATA)
        - end point (IATA)
        - take off time
        - landing time
        - air time
        - notes
      

      return (
        <div className="ExpeditionActivity-item">
          <b className="ExpeditionActivity-type">{ActivityType}</b>
          <br />
          <p className="ExpeditionActivity-duration">Duration: {ActivityDuration}</p>
          <p className="ExpeditionActivity-notes">Notes: {ActivityNotes}</p>
        </div>
      );

    } else if  ( ActivityType === 'train' ) {

      TRAIN/BUS/CAR
        - start point (string)
        - end point (string)
        - departure time
        - arrival time
        - air time
        - notes
      

      return (
        <div className="ExpeditionActivity-item">
          <b className="ExpeditionActivity-type">{ActivityType}</b>
          <br />
          <p className="ExpeditionActivity-duration">Duration: {ActivityDuration}</p>
          <p className="ExpeditionActivity-notes">Notes: {ActivityNotes}</p>
        </div>
      );

    } else if  ( ActivityType === 'hike' ) {

      HIKE
        - start point (string)
        - end point (string)
        - departure time
        - estimated duration
        - difficulty
        - notes
      

      return (
        <div className="ExpeditionActivity-item">
          <b className="ExpeditionActivity-type">{ActivityType}</b>
          <br />
          <p className="ExpeditionActivity-duration">Duration: {ActivityDuration}</p>
          <p className="ExpeditionActivity-notes">Notes: {ActivityNotes}</p>
        </div>
      );

    } else {

      return (
        <div className="ExpeditionActivity-item">
          <b className="ExpeditionActivity-type">{ActivityType}</b>
          <br />
          <p className="ExpeditionActivity-duration">Duration: {ActivityDuration}</p>
          <p className="ExpeditionActivity-notes">Notes: {ActivityNotes}</p>
        </div>
      );

    } */

    if ( props.mode === 'edit' ) {

      return (
        <div className="ExpeditionActivity-item">
          <b className="ExpeditionActivity-type">{ActivityType}</b>
          <br />
          <p className="ExpeditionActivity-duration">Duration: {ActivityDuration}</p>
          <p className="ExpeditionActivity-notes">Notes: {ActivityNotes}</p>
        </div>
      );

    } else {

      return (
        <div className="ExpeditionActivity-item">
          <div className="EA-item-actions">
            <button  
               className="ExpeditionActivity-button"
              onClick={(e) => this.toggleMode(e)}
              >
              edit
            </button><br />
            <button  
              className="ExpeditionActivity-button"
              onClick={(e) => this.toggleMode(e)}
              >
              delete
            </button>
          </div>
          <div className="EA-item-content">

            <b className="ExpeditionActivity-type">{ActivityType}</b>
            <br />
            <p className="ExpeditionActivity-duration">Duration: {ActivityDuration}</p>
            <p className="ExpeditionActivity-notes">Notes: {ActivityNotes}</p>

          </div>
        </div>
      );

    }

  }

  

  renderThing() {

    const dayInfo = this.props.data;

    if (this.state.editMode || ( this.props.mode === 'edit' ) ) {
      // edit mode

      if (dayInfo) {
        // we have some data
        return (
          <div>

            <this.RenderActivity data={dayInfo} />
            
          </div>
        );
      } else {
        // no data, show blank fields
        return (
          <div>
            <em>Nothing planned for this day</em>
            <p>
              <button  
                className="ExpeditionActivity-button"
                onClick={(e) => this.toggleMode(e)}
                >
                add activity
              </button>
            </p>
          </div>
        );
      }

      
    } else {
      // display mode
      if (dayInfo) {
        return (
          <div>
            <this.RenderActivity data={dayInfo} mode='display' />
          </div>
        );
      } 
      
    }
  }

  render() {

    return (

      this.renderThing()
      
    );

  }
}

export default ExpeditionActivity;