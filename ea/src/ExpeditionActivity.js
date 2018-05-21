import React, { Component } from 'react';
import './ExpeditionActivity.css';

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

    if ( ActivityType === 'flight' ) {
      
      /* FLIGHT
        - start point (IATA)
        - end point (IATA)
        - take off time
        - landing time
        - air time
        - notes
      */

      return (
        <div className="ExpeditionActivity-item">
          <b className="ExpeditionActivity-type">{ActivityType}</b>
          <br />
          <p className="ExpeditionActivity-duration">Duration: {ActivityDuration}</p>
          <p className="ExpeditionActivity-notes">Notes: {ActivityNotes}</p>
        </div>
      );

    } else if  ( ActivityType === 'train' ) {

      /* TRAIN/BUS/CAR
        - start point (string)
        - end point (string)
        - departure time
        - arrival time
        - air time
        - notes
      */

      return (
        <div className="ExpeditionActivity-item">
          <b className="ExpeditionActivity-type">{ActivityType}</b>
          <br />
          <p className="ExpeditionActivity-duration">Duration: {ActivityDuration}</p>
          <p className="ExpeditionActivity-notes">Notes: {ActivityNotes}</p>
        </div>
      );

    } else if  ( ActivityType === 'hike' ) {

      /* HIKE
        - start point (string)
        - end point (string)
        - departure time
        - estimated duration
        - difficulty
        - notes
      */

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

    }

  }

  

  renderThing() {

    const dayInfo = this.props.data;

    if (this.state.editMode || ( this.props.mode === 'edit' ) ) {
      // edit mode

      if (dayInfo) {
        // we have some data
        return (
          'in edit mode WITH data'
        );
      } else {
        // no data, show blank fields
        return (
          'in edit mode NO data'
        );
      }

      
    } else {
      // display mode
      if (dayInfo) {
        return (
          <div>
            <this.RenderActivity data={dayInfo} />
          </div>
        );
      } else {
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
      
    }
  }

  render() {

    return (

      this.renderThing()
      
    );

  }
}

export default ExpeditionActivity;