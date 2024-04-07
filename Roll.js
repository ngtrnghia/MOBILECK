import React from 'react';
import { useSelector } from 'react-redux';

const Roll = () => {
  const rolledNumber = useSelector((state) => state.rolledNumber);

  return <div>Rolled Number: {rolledNumber}</div>;
};

export default Roll;