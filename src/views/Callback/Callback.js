import React, { Component } from "react";
import { auth0 } from "../../auth/auth";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  profile: state.common.profile
});

const mapDispatchToProps = dispatch => ({
  onLogin: (profile, idToken, accessToken, expiresAt) =>
    dispatch({ type: 'LOGIN', profile, idToken, accessToken, expiresAt })
});

class Callback extends Component {
  componentWillMount() {
    // Find Auth0 Result
    auth0.parseHash(window.location.hash, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = "";
        auth0.client.userInfo(authResult.accessToken, (err, profile) => {
          this.props.onLogin(profile, authResult.idToken, authResult.accessToken, (authResult.expiresIn * 1000 + Date.now()) );
        });
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
    });
  }

  render() {
    if (this.props.profile.name !== 'user@email.com') {
      return (
        <Redirect to='/' />
      );
    } else {
      return (<div className="app-window"></div>);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
