import React from 'react';
import { Link } from 'react-router-dom';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getTime(time) {
  var date = new Date(time);
  var day = date.getDate();
  var month = months[date.getMonth()];
  return month + " " + day;
}

const Requests = props => {
  if (!props.requests) {
    return (<div>Loading...</div>);
  } else if (props.requests.length === 0) {
    return (<div>No Requests</div>);
  } else {
    return (
      <div>
        {
          props.requests.map(request => {
            if(props.tag==='All' || request.tag===props.tag)
            return (
            <Link key={request.id} to={"/scheduling/" + request.id}>
              <div className="request">
                <div className="requestitem box-text1 rname">{request.name}</div>
                <div className="requestitem box-text1 rcommittee">{request.committee}</div>
                <div className="requestitem box-text1 rdescription">{request.description}</div>
                <div className="requestitem box-text1 rdate"><i className="ion-ios-calendar"></i> {getTime(request.time)}</div>
                <div className="requestitem box-text1 rtag"><span className="uk-badge">{request.tag}</span></div>
              </div>
            </Link>
            );
          })
        }
      </div>
    );
  }
}

export default Requests;