import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Sidebar.css';

const mapStateToProps = state => ({
  profile: state.common.profile,
  token: state.common.token
});

class Sidebar extends React.Component {
  render() {
    if (this.props.token) {
      return (
        <div className="sidebar-container">
          <input id="toggle1" type="checkbox" />
          <div className="sidebar sidebar-margin" id='leftsidebar'>
            <div className="sidebar-logo">
              <img src='https://i.imgur.com/zvMiK2k.png' className="sidebar-img" alt='Board Vision' />
              <span className="sidebar-logotext">BOARD VISION</span>
            </div>
            <p className="sidebar-subtext">EXECUTIVE ASSISTANT PORTAL</p>
            <div className="sidebar-user">
              <p className="box-miniheading">Welcome,</p>
              <Link to="/"><div className="sidebar-username uk-button uk-button-text">{this.props.profile.nickname}</div></Link>
            </div>

            <Link to='/scheduling' className="sidebar-item">
              <i className="sidebar-icon ion-ios-list-box"></i>
              <span className="sidebar-text">Scheduling</span>
            </Link>
            <Link to='/calendar' className="sidebar-item">
              <i className="sidebar-icon ion-ios-calendar"></i>
              <span className="sidebar-text">Calendar</span>
            </Link>
            <Link to='/messaging' className="sidebar-item">
              <i className="sidebar-icon ion-ios-chatbubbles"></i>
              <span className="sidebar-text">Messaging</span>
            </Link>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default connect(mapStateToProps)(Sidebar);