import {
  HANDLE_OK_BTN,
  HANDLE_CANCEL_BTN,
  SHOW_MODAL,
  SET_MODAL_PROPS,
  CLOSE_MODAL,
} from './constants';

export const handleOkBtn = () => ({
  type: HANDLE_OK_BTN,
})

export const handleCancelBtn = () => ({
  type: HANDLE_CANCEL_BTN,
});

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const setModalProp = (modalProps) => ({
  type: SET_MODAL_PROPS,
  modalProps
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});