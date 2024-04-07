import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rollNumber } from './actions';
import History from './History';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);

  return (
    <div>
      <h1>Random Number Generator</h1>
      <button onClick={() => dispatch(rollNumber())}>Roll</button>
      <History history={history} />
    </div>
  );
};

export default HomeScreen;