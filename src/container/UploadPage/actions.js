import {
  ON_CHANGE_INPUT,
  HANDLE_UPLOAD_PROFILE,
  UPDATE_ERRORS,
  ADD_FILE
} from './constants';

export const onChangeInput = (input) => ({
  type: ON_CHANGE_INPUT,
  input
})

export const handleUploadProfile = (profile) => ({
  type: HANDLE_UPLOAD_PROFILE,
  profile,
})


export const updateErrors = (errors) => ({
  type: UPDATE_ERRORS,
  errors,
});

export const addFile = (avatar) => ({
  type: ADD_FILE,
  avatar
});

