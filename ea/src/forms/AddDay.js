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
      date:''
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

  }

  submitDate(newDateName, newDate) {
    // after getting the date like 14/02/1999, split it
    var newDateDay = newDate.split('/')[1];
    var newDateMonth = newDate.split('/')[0];

    let newDateForJson = newDateMonth.toString() + newDateDay.toString();

    newDateForJson = parseInt(newDateForJson, 10);

    /*newDate = newDate.replace(/\//gi, '');
    console.log(newDate);
    return false;*/

    let newDateContent = {id:parseInt(newDateForJson, 10),date:newDateName.toString(),dateDay:parseInt(newDateDay, 10),dateMonth:parseInt(newDateMonth, 10),fullDate:newDate,listId:newDate.toString(),activities:[]};

    //newDateContent = JSON.stringify(newDateContent);

    console.log(newDateContent)

    let datesList = [];
    //let datesList = ['06/27/2018','06/28/2018'];

    // get list of existing dates
    this.data.days.map(function(object, i){

      // get the list of ids (and dates)
      datesList.push(object.id);

      return (datesList);

    })

    // insert new date in the list of ids so we can sort
    if ( datesList.indexOf(newDateForJson) === -1 ) {

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
      }).
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    } else {

      // date already exists, show some kind of error message, no?
    }

    this.props.handler;

  }

  render() {

    return (

      <div className="AddDay-wrapper">

        <DatePicker
          className="AddDay-input"
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="LL"
          placeholderText="Choose date"
          locale="en-gb"
          highlightDates={["06/27/2018","06/28/2018"]}
          minDate={moment()}
          popperClassName="some-custom-class"
          popperPlacement="top-end"
          popperModifiers={{
            offset: {
              enabled: true,
              offset: '5px, 10px'
            },
            preventOverflow: {
              enabled: true,
              escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
              boundariesElement: 'viewport'
            }
          }}
        />

        {/*<button
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
            highlightDates={["06/27/2018","06/28/2018"]}
            minDate={moment()}
            popperClassName="some-custom-class"
            popperPlacement="top-end"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: '5px, 10px'
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
                boundariesElement: 'viewport'
              }
            }}
          />
          )
        }*/}

      </div>
      
    );
  }
}

export default AddDay;