import {
  ON_CHANGE_INPUT,
  HANDLE_UPLOAD_PROFILE,
  UPDATE_ERRORS,
  ADD_FILE
} from './constants';

const initialState = {
    avatar: {},
    first_name: '',
    last_name: '',
    sexs: '',
    email: '',
    password: '',
    errors: {},
}

function uploadReducer(state = initialState, action) {
  switch(action.type) {
    case ON_CHANGE_INPUT:
      return {...state, ...action.input};
    case HANDLE_UPLOAD_PROFILE:
      return state;
    case UPDATE_ERRORS:
      return {...state, errors: action.errors};
    case ADD_FILE:
      return {...state, avatar: action.avatar}
    default:
      return state;
  }
}

export default uploadReducer;