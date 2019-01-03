import React from 'react';
import './MeetingTable.css';

class MeetingTable extends React.Component {
    render() {
        return (
            <div className="meetingtable-margins">
                <table className="uk-table uk-table-small uk-table-middle">
                    <thead>
                        <tr>
                            <th>Participants</th>
                            <th><div className="meetingtable-heading">May 1</div><div className="meetingtable-heading">Tue</div><div className="meetingtable-heading">4 pm</div></th>
                            <th><div className="meetingtable-heading">May 1</div><div className="meetingtable-heading">Tue</div><div className="meetingtable-heading">5 pm</div></th>
                            <th><div className="meetingtable-heading">May 2</div><div className="meetingtable-heading">Wed</div><div className="meetingtable-heading">2 pm</div></th>
                            <th><div className="meetingtable-heading">May 3</div><div className="meetingtable-heading">Thu</div><div className="meetingtable-heading">3 pm</div></th>
                            <th><div className="meetingtable-heading">May 7</div><div className="meetingtable-heading">Mon</div><div className="meetingtable-heading">5 pm</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Director Not Under Management</td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">One
                                <input type="checkbox" checked="checked" disabled="true" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">One
                                <input type="checkbox" checked="checked" disabled="true" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">One
                                <input type="checkbox" disabled="true" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">One
                                <input type="checkbox" checked="checked" disabled="true" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">One
                                <input type="checkbox" disabled="true" />
                                <span className="checkmark"></span>
                            </label></td>
                        </tr>
                        <tr>
                            <td>Jay Walter Harrington</td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                        </tr>
                        <tr>
                            <td>John Doe Smith</td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                            <td className="meetingtable-nopadding uk-table-shrink"><label className="checkcontainer">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MeetingTable;