import { ROLL_NUMBER } from './actions';

const initialState = {
  history: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLL_NUMBER:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;