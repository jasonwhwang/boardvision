import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Scheduling.css';
import { connect } from 'react-redux';

import { services } from '../../services/services';

import Requests from './Requests';

const mapStateToProps = state => ({
  token: state.common.token,
  requests: state.requests.requests
});

const mapDispatchToProps = dispatch => ({
  onLoadRequests: (requests) =>
    dispatch({ type: 'LOAD_REQUESTS', requests })
});

class Scheduling extends React.Component {
  constructor(props) {
    super();

    this.state = {
      director: 'All Directors',
      tag: 'All'
    };
  };

  tagAllClick() {
    const newState = Object.assign({}, this.state, { tag: 'All' });
    this.setState(newState);
  }
  tagNewClick() {
    const newState = Object.assign({}, this.state, { tag: 'New' });
    this.setState(newState);
  }
  tagPenClick() {
    const newState = Object.assign({}, this.state, { tag: 'Pending' });
    this.setState(newState);
  }
  tagFinClick() {
    const newState = Object.assign({}, this.state, { tag: 'Finalized' });
    this.setState(newState);
  }

  componentWillMount() {
    this.props.onLoadRequests(services('requests'));
  }

  render() {
    if (this.props.token) {
      return (
        <div className="app-window">
          <div className="box-container">
            <div className="topsection">
              <div className="box-miniheading uk-margin-small-bottom view-title">Scheduling</div>
              <div className="spacer"></div>
              <button className="uk-button uk-button-primary view-filter uk-margin-right">All Directors</button>
              <div uk-dropdown="mode: click; pos: bottom-right">
                <ul className="uk-nav uk-dropdown-nav">
                  <li className=""><a>All</a></li>
                  <li className=""><a>Director 1</a></li>
                  <li className=""><a>Director 2</a></li>
                  <li className=""><a>Director 3</a></li>
                </ul>
              </div>
              <button className="uk-button uk-button-default view-filter">{this.state.tag}</button>
              <div uk-dropdown="mode: click; pos: bottom-right">
                <ul className="uk-nav uk-dropdown-nav">
                  <li className=""><a onClick={this.tagAllClick.bind(this)}>All</a></li>
                  <li className=""><a onClick={this.tagNewClick.bind(this)}>New</a></li>
                  <li className=""><a onClick={this.tagPenClick.bind(this)}>Pending</a></li>
                  <li className=""><a onClick={this.tagFinClick.bind(this)}>Finalized</a></li>
                </ul>
              </div>
            </div>

            <div className="mainsection">
              <div className="requestsection">
                <Requests requests={this.props.requests} tag={this.state.tag} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (<Redirect to='/' />);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduling);