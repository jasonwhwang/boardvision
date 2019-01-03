import React, { Component } from 'react';

function timeSince(time) {
  var date = new Date(time);
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

class NotificationTable extends Component {
  render() {
    if (this.props.notifications) {
      return (
        <div className='table-wrapper'>
          <table className="uk-table uk-table-divider uk-table-middle">
            <tbody>
              {
                this.props.notifications.map(notification => {
                  return (
                    <tr key={notification.id}>
                      <td className="box-text2"><div className="uk-badge">{notification.tag}</div></td>
                      <td className="box-text1">{notification.description}</td>
                      <td className="box-timeheading"><i className="ion-ios-time"></i> {timeSince(notification.time)}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default NotificationTable;