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
    console.log(this.props.data);
    
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
                 <ExpeditionDay data={props.days} />,

                <p className="date"> {object.date} </p>

              ]}
            </div>; 
          })}
      </div>
      );

    }

    const days = this.props.data.Alpha001.days;
    // 
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