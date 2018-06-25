import React, { Component } from 'react';
// import moment from 'moment';
import axios from 'axios';

class DeleteDay extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;    
    this.state = {
      date:'',
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3004/Alpha001')
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  handleChange (date) {

    let deleteItemIndex = '';

    // get list of existing dates
    this.state.data.days.map(function(object, i){
      // if fullDate is the same as date to delete
      if (object.fullDate.toString() === date.toString()) {
        // log the index
        deleteItemIndex = [i]; 
      }

      return(deleteItemIndex)

    })

    //console.log(deleteItemIndex)
    // remove index item from the array
    this.state.data.days.splice(deleteItemIndex, 1);

    let days = this.state.data.days;

    axios.post('http://localhost:3004/Alpha001',
    {
      title: this.state.data.title,
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

      <div className="DeleteDay-wrapper">
        <button
            className="ExpeditionActivity-button"
            onClick={(e) => this.handleChange(this.props.date)}>
            delete
        </button>

      </div>
      
    );
  }
}

export default DeleteDay;