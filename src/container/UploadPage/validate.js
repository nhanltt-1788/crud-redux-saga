import { aceptFileList } from './constants';

function validate({avatar, first_name, last_name, sexs, email, password}) {
  const errors = {};

  if(!avatar) {
    errors.avatar_blank = "Please chose file to upload";
  }

  if(avatar && avatar[0].name.length > 128) {
    errors.file_name_max_length = "Max length 128 characters";
  }

  if(avatar && avatar[0].size / (1024 * 1024) > 100) {
    errors.file_max_size = "The file capacity should be 100MB or less.";
  }

  if(avatar && aceptFileList.indexOf(avatar[0].name.substr(avatar[0].name.lastIndexOf('.')).toLowerCase()) === -1) {
    errors.file_invalid_extension = "Files with extensions cannot be uploaded.";
  }

  if(!first_name) {
    errors.first_name_error = "Please enter first name";
  }

  if(!last_name) {
    errors.last_name_error = "Please enter last name";
  }

  if(!sexs) {
    errors.sexs_error = "Please chose sexs";
  }

  if(!email) {
    errors.email_error = "Please enter email";
  }

  if(!password) {
    errors.password_error = "Please enter password";
  }

  return errors;
}

export {validate};