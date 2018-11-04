import React, { Component } from 'react';
import './ExpeditionDay.css';
import ExpeditionActivity from './ExpeditionActivity';
import './ExpeditionActivity.css';
import DeleteDay from './forms/DeleteDay';
import './forms/DeleteDay.css';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import moment from 'moment';
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
      modalIsOpen: false,
      timePickerIsOpen: false,
      pickedTime: '',
      // startDate: moment(this.props.data.fullDate),
      startTime: '',
      selectedStartTime: moment(this.props.data.fullDate),
      selectedEndTime: moment(this.props.data.fullDate),
      newActivityType: 'empty',
      newActivityStartTime: '',
      newActivityEndTime: '',
      newActivityNotes: ''
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openTimePicker = this.openTimePicker.bind(this);
    this.addStartTime = this.addStartTime.bind(this);
    this.addEndTime = this.addEndTime.bind(this);
    this.pickType = this.pickType.bind(this);
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

  addStartTime (addedTime) {

    this.setState({
      newActivityStartTime: addedTime
    });

    this.setState({
      selectedStartTime: moment(addedTime)
    });

  }

  addEndTime (addedTime) {

    this.setState({
      newActivityEndTime: addedTime
    });

    this.setState({
      selectedEndTime: moment(addedTime)
    });

  }

  pickType(e, type, item) {
    // console.log(e.target);
    e.preventDefault();
    // console.log(type);
    // console.log(item);
    this.setState({
      newActivityType: item
    })
  }

  
  AddTypeSelector(type) {

    // console.log(type);

    if (type && type === 'empty') {

      return (
        <div>
          <div className="formContainerRow">
            
            <div className="formContainerColumn formContainerColumn-label">
              Travelling
            </div>

            <div className="formContainerColumn">

              <button 
                className="ExpeditionDay-button --addActivityType" 
                onClick={(e) => this.pickType(e, 'travel', 'flight')}
                >Flight</button>
              <button 
                className="ExpeditionDay-button --addActivityType" 
                onClick={(e) => this.pickType(e, 'travel', 'train')}
                >Train</button>
              <button 
                className="ExpeditionDay-button --addActivityType" 
                onClick={(e) => this.pickType(e, 'travel', 'bus')}
                >Bus</button>

            </div>
            
          </div>

          <div className="formContainerRow">

            <div className="formContainerColumn formContainerColumn-label">
              Eating
            </div>
              
              <div className="formContainerColumn">

                <button 
                  className="ExpeditionDay-button --addActivityType" 
                  onClick={(e) => this.pickType(e, 'eat', 'breakfast')}
                  >breakfast</button>
                <button 
                  className="ExpeditionDay-button --addActivityType" 
                  onClick={(e) => this.pickType(e, 'eat', 'lunch')}
                  >lunch</button>
                <button 
                  className="ExpeditionDay-button --addActivityType" 
                  onClick={(e) => this.pickType(e, 'eat', 'dinner')}
                  >dinner</button>
                <button 
                  className="ExpeditionDay-button --addActivityType" 
                  onClick={(e) => this.pickType(e, 'eat', 'coffee')}
                  >coffee/snack</button>
              
              </div>
          </div>
          <div className="formContainerRow">

            <div className="formContainerColumn formContainerColumn-label">
              Doing stuff
            </div>

            <div className="formContainerColumn">

              <button 
                className="ExpeditionDay-button --addActivityType" 
                onClick={(e) => this.pickType(e, 'do', 'hike')}
                >hike</button>
              <button 
                className="ExpeditionDay-button --addActivityType" 
                onClick={(e) => this.pickType(e, 'do', 'sightseeing')}
                >sightseeing</button>
              <button 
                className="ExpeditionDay-button --addActivityType" 
                onClick={(e) => this.pickType(e, 'do', 'chilling')}
                >chilling</button>
              <button 
                className="ExpeditionDay-button --addActivityType" 
                onClick={(e) => this.pickType(e, 'do', 'hike')}
                >hike</button>
            
            </div>

          </div>
        
        </div>

      );

    }

  }


  AddExtraFields(type) {

    // console.log(type);

    if (type && ( type !== 'empty' ) && ( type === 'flight'||'train'||'bus') ) {

      // console.log(type);

    return (

        <div>

          <div className="formContainerRow">

            <div className="formContainerColumn formContainerColumn-label">
              Departure at
            </div>

            <div className="formContainerColumn">

              <DatePicker
                selected={this.state.selectedStartTime}
                onChange={this.addStartTime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="LT"
                timeCaption="Time"
              />

            </div>

          </div>

          <div className="formContainerRow">

            <div className="formContainerColumn formContainerColumn-label">
              Arrival at
            </div>

            <div className="formContainerColumn">

              <DatePicker
                selected={this.state.selectedEndTime}
                onChange={this.addEndTime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="LT"
                timeCaption="Time"
              />

            </div>

          </div>

        </div>
    
      )

    } else if ( type && ( type !== 'empty' ) ) {

      return (

        <div className="formContainerRow">

          <div className="formContainerColumn formContainerColumn-label">
            Starts at 
          </div>

          <div className="formContainerColumn">

            <DatePicker
              selected={this.state.selectedStartTime}
              onChange={this.addStartTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeFormat="HH:mm"
              dateFormat="LT"
              timeCaption="Time"
            />

          </div>

        </div>

      )

    }

  }

  AddSubmitInput(type) {

    console.log(type);

    if (type && type !== 'empty') {

    return (

        <div>

          <div className="formContainerRow">

            <div className="formContainerColumn formContainerColumn-label">

              Notes

            </div>
            
            <div className="formContainerColumn">

              <textarea rows="6" cols="45" className="formTextarea" placeholder="General notes, links to other sites with more info">
              </textarea>

            </div>

          </div> 



          <div className="formContainerRow">

            <button className="ExpeditionDay-button">Add {type}</button>

            <button className="ExpeditionDay-button">Cancel</button>

          </div>

        </div>
      )
    }

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
    // this.subtitle.style.color = '#000';
    // I don't think I need this at all, actually.
    this.parentDate = this.props.data.date;
    // console.log(this.parentDate);
  }
  
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openTimePicker() {
    this.setState({timePickerIsOpen: true});
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
              portalClassName="AddActivityModal"
            >
    
              <h2 ref={parentDate => parentDate = this.parentDate}>Add stuff to <b>{this.props.data.date}</b></h2>

              <button className="btn-ModalClose" onClick={this.closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
              
              <form>
                <div className="formContainer">
                  
                  {this.AddTypeSelector(this.state.newActivityType)}
                  
                  {this.AddExtraFields(this.state.newActivityType)}

                  {this.AddSubmitInput(this.state.newActivityType)}

                </div>

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