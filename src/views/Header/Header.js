import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

import HeaderUser from './HeaderUser';

const mapStateToProps = state => ({
  profile: state.common.profile,
  token: state.common.token
});

class Header extends React.Component {
  render() {
    if (this.props.token) {
      return (
        <div className="header uk-navbar">
          <div className="uk-navbar-left">
            <label htmlFor="toggle1"><a className="ion-ios-menu sidebar-toggle"> </a></label>
          </div>

          <div className="uk-navbar-center">
            <span className='header-text'><img src='https://i.imgur.com/zvMiK2k.png' className='header-logo' alt='Board Vision' /> BOARD VISION</span>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <a className="ion-ios-notifications"><span className="notification-dot"></span></a>
                <div uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li className="uk-nav-header">Notifications</li>
                    <li className="smalltext"><Link to="/"><span className="uk-badge badge-i">10</span> Notifications</Link></li>
                  </ul>
                </div>
              </li>
              <HeaderUser />
            </ul>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default connect(mapStateToProps)(Header);