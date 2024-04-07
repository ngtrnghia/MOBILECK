import React from 'react';

const History = ({ history }) => (
  <div>
    <h2>History</h2>
    <ul>
      {history.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  </div>
);

export default History;