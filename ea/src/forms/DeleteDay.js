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
  }

  componentDidMount() {
    axios.get('http://localhost:3004/Alpha001')
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }


  render() {

    return (

      <div className="DeleteDay-wrapper">

        <button
            className="ExpeditionActivity-button btn-deleteDay"
            title="delete this day"
            onClick={(e) => this.props.deleteItem(this.props.date)}>
            <svg width="24" height="24" viewBox="0 0 48 48"><path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"/></svg>
        </button>

      </div>
      
    );
  }
}

export default DeleteDay;