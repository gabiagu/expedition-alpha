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
    
    let ExpeditionTitle = this.props.data.Alpha001.title;
    console.log(ExpeditionTitle);

    function DayList(props) {
      const days = props.days;

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