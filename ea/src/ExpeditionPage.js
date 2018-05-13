import React, { Component } from 'react';
import './ExpeditionPage.css';

class ExpeditionPage extends Component {
  
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    // should load an expedition page
  }

  render() {
    console.log(this.props.data);
    var ExpeditionTitle = this.props.data.Alpha001.title;
    
    for (var i = 0; i < this.props.data[i]; i++) {
        ExpeditionTitle = this.props.data.key;
        console.log(ExpeditionTitle);
    } 

    //console.log(this.props.data.Alpha001.title);
    //console.log(this.props.data["Alpha001"].Day1["0"].activity);

    /*const DayList = ([
      "Aug 22", "Aug 23", "Aug 24"
    ]);*/

    function DayList(props) {
      const days = props.days;
      /*const listItems = days.map((day) =>
        <li>
          {day.date}
          {day.activity}
          {day.notes}
        </li>
      );*/

      return (
      <div>
        {days.map(function(object, i){
          return <div className={"row"} key={i}> 
              {[ object.name ,
                 // remove the key
                 <b className="fosfo" key={i}> {object.activity} </b> , 
                 object.notes
              ]}
            </div>; 
          })}
      </div>
      );
      /*return (
        <ul>{listItems}</ul>
      );*/
    }

    const days = this.props.data.Alpha001.day1;

    return (
      <div>
        <div className="ExpeditionPage-header">
          <h1>{ExpeditionTitle}</h1>
        </div>
        <div className="ExpeditionPage-content">
          <DayList days={days} />
        </div>
      </div>
    );
  }
}

export default ExpeditionPage;