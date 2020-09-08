import { UPDATE_AUTH } from '../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
