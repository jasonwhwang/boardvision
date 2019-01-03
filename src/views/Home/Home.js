import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './Home.css';

import NotificationTable from './NotificationTable';
import ProfileTable from './ProfileTable';

import { login, isAuthenticated } from '../../auth/auth';
import { services } from '../../services/services';

const mapStateToProps = state => ({
  profile: state.common.profile,
  token: state.common.token,
  phone: state.common.phone,
  directors: state.common.directors,
  notifications: state.common.notifications,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLogin: (profile, idToken) =>
    dispatch({ type: 'LOGIN', profile, idToken }),
  onProfile: (service) =>
    dispatch({ type: 'PROFILE_LOAD', service }),
  onNotification: (service) =>
    dispatch({ type: 'NOTIFICATION_LOAD', service }),
  onRedirect: () =>
    dispatch({ type: 'REDIRECT' })
});

class Home extends React.Component {
  componentWillMount() {
    if (isAuthenticated()) {
      this.props.onLogin(JSON.parse(localStorage.getItem('profile')), localStorage.getItem('id_token'));
      this.props.onProfile(services('account'));
      this.props.onNotification(services('notifications'));
    } else if (this.props.profile.name === 'user@email.com') {
      this.props.history.push('/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.props.history.push(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    if (this.props.token) {
      return (
        <div className="app-window">
          <div className="uk-grid uk-grid-small" >
            <div className="uk-width-1-3@s">
              <div className="box-container">
                <p className="box-miniheading">Account</p>
                <div className="user-profile">
                  <img className="imgStyle" src={this.props.profile.picture} alt='Profile' />
                  <div className="user-profile-text">
                    <div className="box-textheading1">{this.props.profile.nickname}</div>
                    <div className="box-text1">{this.props.profile.name}</div>
                    <div className="box-text1">{this.props.phone}</div>
                  </div>
                </div>
                <div className="user-directorlist">
                  <div>
                    <div className="box-miniheading uk-width-1-1 profile-directorheading"><div className="">Managed Directors</div></div>
                    <ProfileTable directors={this.props.directors} />
                  </div>
                </div>
                <Link to="/settings" className="uk-button uk-button-default uk-align-center"><i className="ion-ios-settings"></i> Edit Settings</Link>
              </div>
            </div>

            <div className="uk-width-expand@s">
              <div className="box-container">
                <p className="box-miniheading">Notifications</p>
                <NotificationTable notifications={this.props.notifications} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);