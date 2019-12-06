import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';

import { connect } from 'react-redux';
import {
  onChangeInput,
  handleUploadProfile,
  updateErrors,
  addFile,
} from './actions';
import { validate } from './validate';
import Dropzone from '../../components/Dropzone/index';
import {
  FormWrapper,
  FormItem,
  InputText,
  Button,
  Error,
  InputWrapper
} from './styles';

export class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.handleUploadProfile = this.handleUploadProfile.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.renderFileError = this.renderFileError.bind(this);
  }

  renderFileError(errors) {
    let fileErr = '';

    if(!errors.avatar_blank) {
      if(!errors.file_max_size) {
        if(!errors.file_invalid_extension) {
          fileErr = errors.file_name_max_length ? errors.file_name_max_length : '';
        }
        else {
          fileErr = errors.file_invalid_extension
        }
      }
      else {
        fileErr = errors.file_max_size;
      }
    } else {
      fileErr = errors.avatar_blank
    }

    return fileErr;
  }

  handleOnChangeInput = (e) => {
    const { name, value } = e.target;

    this.props.dispatchOnChangeInput({[name]: value});
  }

  handleUploadProfile = (profile) => {
    const errors = validate(profile);

    const formData = new FormData();
    Object.keys(profile).forEach(key => {
      formData.append(key, profile[key]);
    })

    if(!_isEmpty(errors)) {
      this.props.dispatchUpdateErrors(errors);
    }
    else {
      this.props.dispatchHandleUploadProfile(formData);
    }
  }

  onFilesAdded(file) {
    this.props.dispatchAddFile(file)
  }

  render() {
    const { uploadPage } = this.props;

    return (
      <FormWrapper>
        <FormItem>
          <label>Avatar:</label>
          <InputWrapper>
            <Dropzone
              disabled={false}
              onFilesAdded={this.onFilesAdded}
              file={uploadPage.avatar[0]}
              error={this.renderFileError(uploadPage.errors)}
            />
          </InputWrapper>
        </FormItem>
        <div>
          <FormItem>
            <label>First Name: </label>
            <InputWrapper>
              <InputText
                type="text"
                name="first_name"
                onChange={this.handleOnChangeInput}
                value={uploadPage.first_name}
              />
              {
                uploadPage.errors.first_name_error && (
                  <Error>{uploadPage.errors.first_name_error}</Error>
                )
              }
            </InputWrapper>
          </FormItem>
          <FormItem>
            <label>Last Name: </label>
            <InputWrapper>
              <InputText
                type="text"
                name="last_name"
                onChange={this.handleOnChangeInput}
                value={uploadPage.last_name}
              />
              {
                uploadPage.errors.last_name_error && (
                  <Error>{uploadPage.errors.last_name_error}</Error>
                )
              }
            </InputWrapper>
          </FormItem>
        </div>
        <FormItem>
            <label>Sexs: </label>
            <InputWrapper>
              <label>
                <input
                  type="radio"
                  name="sexs"
                  value="male"
                  onChange={this.handleOnChangeInput}
                  checked={uploadPage.sexs === "male"}
                />
                <span>Male</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="sexs"
                  value="female"
                  onChange={this.handleOnChangeInput}
                  checked={uploadPage.sexs === "female"}
                />
                <span>Female</span>
              </label>
              {
                uploadPage.errors.sexs_error && (
                  <Error>{uploadPage.errors.sexs_error}</Error>
                )
              }
            </InputWrapper>
        </FormItem>
        <FormItem>
          <label>Email: </label>
          <InputWrapper>
            <InputText
              type="email"
              name="email"
              onChange={this.handleOnChangeInput}
              value={uploadPage.email}
            />
            {
              uploadPage.errors.email_error && (
                <Error>{uploadPage.errors.email_error}</Error>
              )
            }
          </InputWrapper>
        </FormItem>
        <FormItem>
          <label>Password:</label>
          <InputWrapper>
            <InputText
              type="password"
              name="password"
              onChange={this.handleOnChangeInput}
              value={uploadPage.password}
            />
            {
              uploadPage.errors.password_error && (
                <Error>{uploadPage.errors.password_error}</Error>
              )
            }
          </InputWrapper>
        </FormItem>
        <FormItem>
          <Button onClick={() => this.handleUploadProfile(uploadPage)}>Submit</Button>
        </FormItem>
      </FormWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  uploadPage: state.uploadReducer
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnChangeInput: (data) => dispatch(onChangeInput(data)),
  dispatchHandleUploadProfile: (data) => dispatch(handleUploadProfile(data)),
  dispatchUpdateErrors: (data) => dispatch(updateErrors(data)),
  dispatchAddFile: (data) => dispatch(addFile(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage)
