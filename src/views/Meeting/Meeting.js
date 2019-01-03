import React from 'react';
import './Meeting.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import MeetingTable from './MeetingTable';
import { services } from '../../services/services';

const mapStateToProps = state => ({
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({

});

class Meeting extends React.Component {
  constructor(props) {
    super();
    this.state = {
      meeting: null
    }
  }

  componentWillMount() {
    this.state.meeting = services('meeting').results;
    console.log(this.state.meeting);
  }

  render() {
    if (this.props.token) {
      return (
        <div className="app-window">
          <div className="box-container">
            <div className="box-miniheading">Meeting</div>
            <div className="meeting-section">
              <div className="meeting-name box-bigheading1">{this.state.meeting.name}</div>
              <div className="meeting-committee box-text2"><i className="ion-ios-people"></i> {this.state.meeting.committee}</div>
              <div className="meeting-location box-text2"><i className="ion-ios-map"></i> {this.state.meeting.location}</div>
              <div className="meeting-duration box-timeheading"><i className="ion-ios-time"></i> {this.state.meeting.duration + ' hours'}</div>
              <div className="meeting-tags box-text1"><span className="uk-badge">{this.state.meeting.tag}</span></div>
              <div className="meeting-description box-text1">{this.state.meeting.description}</div>
            </div>

            <div className="meetingtable">
              <MeetingTable />
            </div>
          </div>
        </div>
      );
    } else {
      return (<Redirect to='/' />);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meeting);