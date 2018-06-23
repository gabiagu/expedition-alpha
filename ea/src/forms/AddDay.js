import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';

class AddDay extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;    
    this.state = {
      startDate: moment(),
      isOpen: false,
      date:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (date) {
    this.setState({startDate: date});

    let newDateName = moment(date).format('LL').toString().split(',')[0];
    let newDate = moment(date).format('l');
    
    this.toggleCalendar();
    this.submitDate(newDateName, newDate);
  }
  
  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }

  submitDate(newDateName, newDate) {
    // after getting the date like 14/02/1999, split it
    var newDateDay = newDate.split('/')[1];
    var newDateMonth = newDate.split('/')[0];

    let newDateForJson = newDateMonth.toString() + newDateDay;

    let newDateContent = {id:parseInt(newDateForJson, 10),date:newDateName.toString(),dateDay:parseInt(newDateDay, 10),dateMonth:parseInt(newDateMonth, 10),listId:parseInt(newDateForJson, 10),activities:[]};

    //newDateContent = JSON.stringify(newDateContent);

    console.log(newDateContent)

    let datesList = [];


    // get list of existing dates
    this.data.days.map(function(object, i){

      // get the list of ids (and dates)
      datesList.push(object.id);

      return (datesList);

    })

    // insert new date in the list of ids so we can sort
    datesList.push(newDateForJson);

    // sort the list of dates
    datesList.sort(function(a, b){return a - b});

    // get index of the new date in the array
    let newDateIndex = datesList.indexOf(newDateForJson);

    this.data.days.splice(newDateIndex, 0, newDateContent);

    console.log(this.data.days);

    let days = this.data.days;

    axios.post('http://localhost:3004/Alpha001',
    {
      title: this.data.title,
      days
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  


  render() {

    return (

      <div className="AddDay-wrapper">
        <button
            className="ExpeditionActivity-button"
            onClick={(e) => this.toggleCalendar(e)}>
            Add another date
        </button>

        {
          this.state.isOpen && (
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="LL"
            placeholderText="Choose date"
            locale="en-gb"
            minDate={moment()}
            withPortal
            inline 
          />
          )
        }

      </div>
      
    );
  }
}

export default AddDay;