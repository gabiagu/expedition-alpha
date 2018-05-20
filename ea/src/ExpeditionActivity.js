import React, { Component } from 'react';
import './ExpeditionActivity.css';

class ExpeditionActivity extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;    
  }

  

  render() {

    // console.log(this.props.data);

    function RenderActivity(props) {

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

    const dayInfo = this.props.data;

    return (

      <div>
        
        <RenderActivity data={dayInfo} />
        
      </div>

    );
  }
}

export default ExpeditionActivity;