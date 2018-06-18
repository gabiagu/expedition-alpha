import React, { Component } from 'react';

class AddDay extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;    
    this.state = {
      listIsHidden: true,
      editMode: this.props.editmode,
      showList: false
    };
    // this.handleClick = this.handleClick.bind(this);
    // console.log(this.state.editMode);
  }

  toggleMode(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    })
    // console.log(this.state.listIsHidden);
  }

    

  renderThing() {

    // const dateClassNames = 'ExpeditionDay-launcher';
    // const activities = this.props.data.activities
    // this renders the things

    if ( this.state.editMode ) {
      // edit mode
      return (
        <div className="AddDay-wrapper AddDay-modal">
          <div className="modal-content">
            foobar
          </div>
        </div>
      );

    } else {
      // display mode
      return (
        <div className="AddDay-wrapper">
          <button  
            className="ExpeditionActivity-button"
            onClick={(e) => this.toggleMode(e)}
            >
            add another day
          </button>
        </div>
      );
      
    }
  };

  render() {

    // console.log(this.props.data);

    return (

      this.renderThing()
      
    );
  }
}

export default AddDay;