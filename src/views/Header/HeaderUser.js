import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  name: state.common.name
});

const mapDispatchToProps = dispatch => ({
  onLogout: () =>
    dispatch({ type: 'LOGOUT' })
});

class HeaderUser extends React.Component {
  constructor() {
    super();
    this.logout = () => this.props.onLogout();
  }

  render() {
    return (
      <li>
        <a className="ion-ios-contact"> </a>
        <div uk-dropdown="mode: click">
          <ul className="uk-nav uk-dropdown-nav">
            <li className="uk-nav-header">Profile</li>
            <li className="smalltext"><Link to="/"><i className="ion-ios-person"></i> {'\u00A0'}Account</Link></li>
            <li className="smalltext"><a onClick={this.logout}><i className="ion-ios-log-out"></i> {'\u00A0'}Log Out</a></li>
          </ul>
        </div>
      </li>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUser);