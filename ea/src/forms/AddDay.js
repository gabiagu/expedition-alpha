import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';

// let dates_array = [];

class AddDay extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;    
    this.state = {
      startDate: moment(),
      isOpen: false,
      date:'',
      dates_array: this.props.dates_array,
      highlightDates: this.props.dates_array
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (date) {
    this.setState({startDate: date});

    let newDateName = moment(date).format('LL').toString().split(',')[0];
    let newDate = moment(date).format('L');
    
    this.toggleCalendar();

    this.submitDate(newDateName, newDate);
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen});
    this.setState({highlightDates: this.state.dates_array})
    
    console.log(this.state.dates_array);

  }

  submitDate(newDateName, newDate) {
    // after getting the date like 14/02/1999, split it
    var newDateDay = newDate.split('/')[1];
    var newDateMonth = newDate.split('/')[0];

    let newDateForJson = newDateMonth.toString() + newDateDay.toString();

    /*newDate = newDate.replace(/\//gi, '');
    console.log(newDate);
    return false;*/

    let newDateContent = {id:parseInt(newDateForJson, 10),date:newDateName.toString(),dateDay:parseInt(newDateDay, 10),dateMonth:parseInt(newDateMonth, 10),fullDate:newDate,listId:newDate.toString(),activities:[]};

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

    // console.log(this.data.days);

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
            // highlightDates={[this.state.dates_array]}
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