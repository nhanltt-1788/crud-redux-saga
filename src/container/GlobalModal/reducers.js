import {
  HANDLE_OK_BTN,
  HANDLE_CANCEL_BTN,
  SHOW_MODAL,
  SET_MODAL_PROPS,
  CLOSE_MODAL,
} from './constants';

const initialState = {
  isVisible: false,
  modalProps: {
    children: null,
  }
}

function modalReducer(state = initialState, action) {
  switch(action.type) {
    case HANDLE_OK_BTN:
      return {...state, isVisible: false }
    case HANDLE_CANCEL_BTN:
      return {...state, isVisible: false }
    case SHOW_MODAL:
      return {...state, isVisible: true }
    case SET_MODAL_PROPS:
      return {...state, modalProps: {...state.modalProps, ...action.modalProps}}
    case CLOSE_MODAL:
      return {...state, isVisible: false }
    default:
      return state;
  }
}

export default modalReducer; 