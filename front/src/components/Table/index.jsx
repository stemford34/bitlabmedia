import React from "react";
import { useHistory } from "react-router-dom";

import "./Table.scss";

const Table = ({ tableData }) => {
  const history = useHistory();

  return (
    <div className="stats-sheet">
      <div className="stats-title">Users statistics</div>
      <table>
        <thead>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Ip address</th>
          <th>Total clicks</th>
          <th>Total page views</th>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index} onClick={() => history.push(`/user/${item.id}`)}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.ip_address}</td>
                <td>{item.page_views}</td>
                <td>{item.clicks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
