import React, { Component } from 'react';
import './ExpeditionPage.css';
import ExpeditionDay from './ExpeditionDay';
import './ExpeditionDay.css';
import AddDay from './forms/AddDay';
import './forms/AddDay.css';
// import axios from 'axios';



class ExpeditionPage extends Component {
  
  constructor(props) {
      super(props);
      this.data = this.props.data;    
      this.state = {
        editMode: false
      };
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
    // should load an expedition page
  }

  toggleMode(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    })
    // console.log(this.state.listIsHidden);
  }

  addDay() {
    console.log('try to add a friggin day')
  }

  renderThing() {

    // console.log(this.props.data);

    let ExpeditionTitle = this.props.data.title;
    //console.log(ExpeditionTitle);

    //console.log(this.props.data.days[0].date);
    //console.log(this.props.data.days[0].activities[0].activity1[0].notes);

    function DayList(props) {
      const days = props.days;
      
      return (
        <div>
          {days.map(function(object, i){

            return <div className={"row"} key={object.listId.toString()+'-'+object.id.toString()}> 
                {[ object.name ,

                    // console.log(props.days.activities[0].length),
                    // console.log(object),
                    // console.log(object.listId.toString()),
                    <ExpeditionDay data={props.days[i]} editmode={props.editmode} />

                ]}
              </div>; 
            })}
        </div>
      );

    }

    // const days = this.props.data;
    // console.log(this.props.data);
    let TotalDayCount = this.props.data.days.length;
    let StartDate = this.props.data.days[0].date;
    let EndDate = this.props.data.days[this.props.data.days.length-1].date;

  
    // display mode
    return (
      <div>
        <div className="ExpeditionPage-header">
          <h1>{ExpeditionTitle}</h1>
          <p>
            <b>{TotalDayCount}</b> days &bull; from <b>{StartDate}</b> until <b>{EndDate}</b>
          </p>
        </div>
        <div className="ExpeditionPage-content">
          
          {/* buttons to each day? */}
          
          <DayList days={this.props.data.days} editmode={this.state.editMode} />
          
          <AddDay />

          {/*<button  
            className="ExpeditionActivity-button"
            onClick={(e) => this.toggleMode(e)}
            >
            edit
          </button>*/}
        </div>
      </div>
    );


  }

  render() {
    //console.log(this.props.data);
      
    return (

      this.renderThing()
      
    );

  }
}

export default ExpeditionPage;