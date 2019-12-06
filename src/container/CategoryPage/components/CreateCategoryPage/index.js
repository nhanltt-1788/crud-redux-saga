import React, { Component } from 'react';
import { connect } from 'react-redux';
import _findIndex from 'lodash/findIndex';
import _isEmpty from 'lodash/isEmpty'
import { withRouter } from "react-router-dom";
import { compose } from 'redux';

import { validates } from './validates';
import DeleteModal from '../DeleteModal';
import { showModal, setModalProp } from '../../../GlobalModal/actions';
import {
  onChangeInput,
  handleCreateCategorySubmit,
  getCategoryById,
  handleEditCategory,
  handleDeleteCategory,
  resetAddCateForm,
  updateErrors,
  resetErrors,
} from '../../actions';
import {
  CreateCategoryPageWrapper,
  FormWrapper,
  FormItem,
  InputText,
  Button,
  FormGroup,
  InputWrapper,
  ButtonGroup,
} from './styles';

export class CreateCategoryPage extends Component {
  constructor(props) {
    super(props);
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.handleOnChangeRadio = this.handleOnChangeRadio.bind(this);
    this.checkCheckboxItem = this.checkCheckboxItem.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    this.handleAddCategorySubmit = this.handleAddCategorySubmit.bind(this);
  }

  componentDidMount() {
    const cateId = this.props.match.params.id;

    if(cateId) {
      this.props.dispatchGetCategoryById(cateId);
    }
  }

  componentWillUnmount() {
    this.props.dispatchResetAddCateForm();
    this.props.dispatchResetError()
  }

  handleAddCategorySubmit() {
    const { category } = this.props;
    const errors = validates(category);

    if(_isEmpty(errors)) {
      this.props.dispatchHandleCategorySubmit(category);
    } else {
      this.props.dispatchUpdateError(errors);
    }
  }

  handleOnChangeInput = (e) => {
    const { name, value } = e.target;

    this.props.dispatchOnChangeInput({ [name]: value });
  }

  checkCheckboxItem = (list, item) => {
    return item === list.find(it => it === item)
  }

  handleOnChangeRadio = (e) => {
    const { name, value, checked } = e.target;
    const { category } = this.props;
    const userList = [...category.authority_user];

    if(checked) {
      userList.push(value)
    }
    else {
      const userIndex = _findIndex(userList, it => it === value);
      if(userIndex !== -1) {
        userList.splice(userIndex, 1);
      }
    }
    this.props.dispatchOnChangeInput({ [name]: userList });
  }

  handleDeleteCategory(id) {
    this.props.dispatchShowModal();
    this.props.dispatchSetModalProp({
      children: <DeleteModal handleDeleteCategory={() => this.props.dispatchHandleDeleteCategory(id)} />
    });
  }

  render() {
    const {
      category,
      type,
      dispatchHandleEditCategory,
      errors,
    } = this.props;

    return (
        <CreateCategoryPageWrapper>
          <h3>Create Category Page</h3>
          <FormWrapper>
            <FormItem>
              <label>Category Name: </label>
              <InputWrapper>
                <InputText
                  type="text"
                  name="category_name"
                  value={category.category_name}
                  onChange={this.handleOnChangeInput}
                />
                {
                  errors.category_name_blank && (<p className="errors">{errors.category_name_blank}</p>)
                }
              </InputWrapper>
            </FormItem>
            <FormItem>
            <label>Parent Category<span className="required">*</span>: </label>
              <select
                onChange={this.handleOnChangeInput}
                name="category_parent"
                value={category.category_parent}
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi">Audi</option>
              </select>
            </FormItem>
            <FormItem>
              <label>Group: </label>
              <FormGroup >
                <label>
                  <input
                    type="radio"
                    name="group"
                    value="group 1"
                    checked={category.group === "group 1"}
                    onChange={this.handleOnChangeInput}
                  /> 
                  Group 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="group"
                    value="group 2"
                    checked={category.group === "group 2"}
                    onChange={this.handleOnChangeInput}
                  /> 
                  Group 2
                </label>
                <label>
                  <input
                    type="radio"
                    name="group"
                    value="group 3"
                    checked={category.group === "group 3"}
                    onChange={this.handleOnChangeInput}
                  /> 
                  Group 3
                </label>
                <label>
                  <input 
                    type="radio"
                    name="group"
                    value="group 4"
                    checked={category.group === "group 4"}
                    onChange={this.handleOnChangeInput}
                  /> 
                  Group 4
                </label>
                <label>
                  <input
                    type="radio"
                    name="group"
                    value="group 5"
                    checked={category.group === "group 5"}
                    onChange={this.handleOnChangeInput} 
                  />
                  Group 5
                </label>
                {
                  errors.group_blank && (<p className="errors">{errors.group_blank}</p>)
                }
              </FormGroup>
            </FormItem>
            <FormItem>
              <label>Authority user: </label>
              <FormGroup>
                <label>
                  <input
                    type="checkbox"
                    name="authority_user"
                    value="user 1"
                    checked={this.checkCheckboxItem(category.authority_user, "user 1")}
                    onChange={this.handleOnChangeRadio}
                  /> 
                  User 1
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="authority_user"
                    value="user 2"
                    checked={this.checkCheckboxItem(category.authority_user, "user 2")}
                    onChange={this.handleOnChangeRadio}
                  /> 
                  User 2
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="authority_user"
                    value="user 3"
                    checked={this.checkCheckboxItem(category.authority_user, "user 3")}
                    onChange={this.handleOnChangeRadio}
                  /> 
                  User 3
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="authority_user"
                    value="user 4"
                    checked={this.checkCheckboxItem(category.authority_user, "user 4")}
                    onChange={this.handleOnChangeRadio}
                  /> 
                  User 4
                </label>
                {
                  errors.authority_user_blank && (<p className="errors">{errors.authority_user_blank}</p>)
                }
              </FormGroup>
            </FormItem>
          <FormItem>
            {
              type === 'edit'
              ? (
                <ButtonGroup>
                  <Button className="delete-btn" onClick={() => this.handleDeleteCategory(category.id)}>Delete</Button>
                  <Button onClick={() => dispatchHandleEditCategory(category)}>Edit Category</Button>
                </ButtonGroup>
              )
              : (
                <Button onClick={this.handleAddCategorySubmit}>Add Category</Button>
              )
            }
            </FormItem>
        </FormWrapper>
        </CreateCategoryPageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  category: state.categoryReducer.category,
  errors: state.categoryReducer.errors,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnChangeInput: (data) => dispatch(onChangeInput(data)),
  dispatchHandleCategorySubmit: (data) => dispatch(handleCreateCategorySubmit(data)),
  dispatchGetCategoryById: (data) => dispatch(getCategoryById(data)),
  dispatchHandleEditCategory: (data) => dispatch(handleEditCategory(data)),
  dispatchShowModal:() => dispatch(showModal()),
  dispatchSetModalProp:(data) => dispatch(setModalProp(data)),
  dispatchHandleDeleteCategory: (data) => dispatch(handleDeleteCategory(data)),
  dispatchResetAddCateForm: () => dispatch(resetAddCateForm()),
  dispatchUpdateError: (data) => dispatch(updateErrors(data)),
  dispatchResetError: () => dispatch(resetErrors())
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CreateCategoryPage);