import React, { Component } from 'react';

class ProfileTable extends Component {
  render() {
    if (this.props.directors) {
      return (
        <div className='table-wrapper'>
          <table className="uk-table uk-table-small uk-table-middle profiletable-padding">
            <tbody>
              {
                this.props.directors.map(director => {
                  return (
                    <tr key={director.name}>
                      <td><img className="uk-preserve-width uk-border-circle" src={director.picture} width="30" alt="" /></td>
                      <td className="box-text1">{director.username}</td>
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

export default ProfileTable;