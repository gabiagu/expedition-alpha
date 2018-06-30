import React, { Component } from 'react';
import './ExpeditionPage.css';
import ExpeditionDay from './ExpeditionDay';
import './ExpeditionDay.css';
import AddDay from './forms/AddDay';
import './forms/AddDay.css';
// import moment from 'moment';
import axios from 'axios';



class ExpeditionPage extends Component {
  
  constructor(props) {
      super(props);
      this.data = this.props.data;    
      this.state = {
        editMode: false,
        shouldUpdate: false,
        listOfDays: props.days
      };
      this.addDayHandler = this.addDayHandler.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
  }

  addDayHandler() {
    //e.preventDefault()
    this.setState({
      shouldUpdate: true
    })
  }

  refresh() {
    this.setState({
      shouldUpdate: true
    })
  }
  
  deleteItem(item) {
    console.log('should delete: '+item);

    let deleteItemIndex = '';

    // get list of existing dates

    this.props.data.days.map(function(object, i){
      // if fullDate is the same as date to delete
      if (object.fullDate.toString() === item.toString()) {
        // log the index
        deleteItemIndex = [i]; 
      }

      return(deleteItemIndex)

    })

    // remove index item from the array
    this.props.data.days.splice(deleteItemIndex, 1);

    let days = this.props.data.days;

    console.log(this);

    axios.post('http://localhost:3004/Alpha001',
    {
      title: this.props.data.title,
      days
    })
    .then((response) => {
      //console.log(response);
      // => arrow function works to bind this. noice.
      this.setState({
        shouldUpdate: true
      })
      //console.log('deleted it.');
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  toggleMode(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    })
    // console.log(this.state.listIsHidden);
  }

  renderThing() {

    // console.log(this.props.data);

    // let dates_array = [moment('06/27/2018'),moment('06/28/2018')];

    let ExpeditionTitle = this.props.data.title;

    function DayList(props) {

      const days = props.days;
      
      return (
        <div>
          {days.map(function(object, i){

            return <div className={"row"} key={object.id.toString()}> 
                {[ object.name ,

                  // console.log(props.days.activities[0].length),
                  // console.log(object),
                  // console.log(object.listId.toString()),
                  <ExpeditionDay 
                    data={props.days[i]} 
                    editmode={props.editmode} 
                    deleteItem={props.deleteItem} // this sends function to delete
                    />

                ]}
              </div>; 
            })}
        </div>
      );

    }

    let TotalDayCount = this.props.data.days.length;
    let StartDate = this.props.data.days[0].date;
    let EndDate = this.props.data.days[this.props.data.days.length-1].date;

    return (

      <div>
        <div className="ExpeditionPage-header">
          <h1>{ExpeditionTitle}</h1>
          <p>
            <b>{TotalDayCount}</b> days &bull; from <b>{StartDate}</b> until <b>{EndDate}</b>
          </p>
        </div>
        <div className="ExpeditionPage-content">
          
          {/* list of days */}
          
          <DayList 
            days={this.props.data.days} 
            editmode={this.state.editMode}
            deleteItem={this.deleteItem}
            />
          
          {/* button to add another one */}
          <AddDay 
            data={this.props.data} 
            addDayHandler={this.addDayHandler} />

        </div>
      </div>
      
    );


  }

  render() {
      
    return (

      this.renderThing()
      
    );

  }
}

export default ExpeditionPage;