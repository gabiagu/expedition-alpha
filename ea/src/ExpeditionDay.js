import React, { Component } from 'react';
import './ExpeditionDay.css';
import ExpeditionActivity from './ExpeditionActivity';
import './ExpeditionActivity.css';
import DeleteDay from './forms/DeleteDay';
import './forms/DeleteDay.css';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal';
// import axios from 'axios';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class ExpeditionDay extends Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.fullDataSet = this.props.fullDataSet;    
    this.state = {
      listIsHidden: true,
      showList: false,
      shouldUpdate: false,
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleList(e) {
    e.preventDefault();
    this.toggleHidden();
    
  };

  toggleHidden() {
    this.setState({
      listIsHidden: !this.state.listIsHidden
    })
  }

  toggleMode(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    })
  }

  initiateAddActivity(e) {
    e.preventDefault();
    console.log('click');
  }

  // onClick={() => this.props.addActivityHandler(this.props.data.fullDate)}

  ActivityList(props) {
      
    const activities = props.activities;

    // console.log(props.mode);

    if (activities.length) {
      // if there is data, show stuff
      return (
        <div className="ExpeditionDay-list" >
          {activities.map(function(object, i){
            return <div className={"row"} key={object.activityId}> 
                {[ object.name ,
                    // calls each activity component
                    <ExpeditionActivity data={props.activities[i]} mode="display" />
                ]}
              </div>; 
            })}
        </div>
      );
    }
  }

  /* modal stuff */

  openModal() {
    this.setState({modalIsOpen: true});
  }
  
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
  
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  /* end modal stuff */

  renderThing() {

    const dateClassNames = 'ExpeditionDay-launcher';
    const activities = this.props.data.activities

    // display mode

    if ( this.state.listIsHidden ) {
      // show date
      // === collapsed view
      // ==================
      return (
        <div className="ExpeditionDay-wrapper">
          <div className={dateClassNames}
          >

            {
              ! this.props.data.activities.length > 0 && (
                <div 
                  className="DayList-item__icon"
                  data-tip='Nothing planned for this day'
                  >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M19 13H5v-2h14v2z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
                </div>
              )
            }

            {
              this.props.data.activities.length > 0 && (
                <button 
                  className="ExpeditionDay-button btn-ExpandCollapse"
                  onClick={(e) => this.toggleList(e)}
                  data-tip='show more'
                  >
                  <svg width="24" height="24" viewBox="0 0 48 48"><path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z"/></svg>
                </button>
                
              )
            }
            <ReactTooltip 
              place="top" 
              type="dark" 
              effect="solid"/>

            <DeleteDay 
              data={this.data} 
              date={this.props.data.fullDate}
              deleteItemHandler={this.props.deleteItemHandler}
              />

            <span className="ExpeditionDay-date">
              {this.props.data.date}
            </span>&nbsp;
            (<span className="ExpeditionDay-activity-count">{this.props.data.activities.length} activities</span>)

            <a href="##"
              className="ExpeditionDay-date-add-activity"
              onClick={this.openModal}
              >
              add an activity
            </a>


            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
    
              <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>

          </div>
          
        </div>
      );

    } else {
      // show date and list
      // === expanded view
      // =================
      return (
        <div className="ExpeditionDay-wrapper">
          <div className={dateClassNames}
            >
            <button 
              className="ExpeditionDay-button btn-ExpandCollapse"
              onClick={(e) => this.toggleList(e)}
              data-tip="show less"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
            </button>

            <ReactTooltip 
              place="top" 
              type="dark" 
              effect="solid"/>

            <DeleteDay 
              data={this.data} 
              date={this.props.data.fullDate}
              deleteItemHandler={this.props.deleteItemHandler}
              />

            <span className="ExpeditionDay-date">
              {this.props.data.date}
            </span>&nbsp;

            (<span className="ExpeditionDay-activity-count">{this.props.data.activities.length} activities</span>)
            
            
          </div>
          
          <div>
            <this.ActivityList activities={activities} mode="display" />
          </div>
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

export default ExpeditionDay;