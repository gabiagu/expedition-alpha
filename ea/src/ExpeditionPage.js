import React, { Component } from 'react';
import './ExpeditionPage.css';
import ExpeditionDay from './ExpeditionDay';
import './ExpeditionDay.css';


class ExpeditionPage extends Component {
  
  constructor(props) {
      super(props);
      this.data = this.props.data;    
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    // should load an expedition page
  }

  render() {
    //console.log(this.props.data);
    
    let ExpeditionTitle = this.props.data.Alpha001.title;
    //console.log(ExpeditionTitle);

    //console.log(this.props.data.Alpha001.days[0].date);
    //console.log(this.props.data.Alpha001.days[0].activities[0].activity1[0].notes);


    function DayList(props) {
      const days = props.days;

      return (
      <div>
        {days.map(function(object, i){
          return <div className={"row"} key={i}> 
              {[ object.name ,
                  // remove the key
                  //<b className="fosfo" key={i}> {object.activity} </b> , 
                  //object.notes

                  // console.log(props.days.activities[0].length),

                  <ExpeditionDay data={props.days[i]} />,

                  <p className="ExpeditionPage-date"> {object.date} </p>,

                  <p className="ExpeditionPage-date"> {object.activity_total} </p>
                  
              ]}
            </div>; 
          })}
      </div>
      );

    }

    const days = this.props.data.Alpha001.days;
    let TotalDayCount = this.props.data.Alpha001.days.length;
    
    return (
      <div>
        <div className="ExpeditionPage-header">
          <h1>{ExpeditionTitle}</h1>
          <p> {TotalDayCount} days | date start - date end?</p>
        </div>
        <div className="ExpeditionPage-content">
          
          {/* buttons to each day? */}
          
          <DayList days={days} />
          
        </div>
      </div>
    );
  }
}

export default ExpeditionPage;