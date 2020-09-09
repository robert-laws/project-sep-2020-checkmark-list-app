import { GET_USER_BY_UID, REMOVE_USER, ADD_NEW_USER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER_BY_UID:
      return {
        ...state,
        profile: action.payload,
      };

    case REMOVE_USER:
      return {
        ...state,
        profile: null,
      };

    case ADD_NEW_USER:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};
