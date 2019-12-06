import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

import { showModal, setModalProp } from '../../../GlobalModal/actions';
import DeleteModal from '../DeleteModal';
import { catePageNumberOptions } from '../../constants';
import {
  CategoryTable,
  CategoryListPageWrapper,
  CategoryListHead,
  ButtonGroup,
  Button,
  SearchWrapper,
  PaginationWrapper,
  CategoryListContainer,
  PageNumberFilter,
} from './styles';
import {
  getCategoryList,
  handleDeleteCategory,
  onChangeSearch,
  changeCatePageNumbers,
  changePageNumberFilter,
  resetCategoryMeta,
} from '../../actions';


export class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.handleRedirectLink = this.handleRedirectLink.bind(this);
    this.handleEditCategory = this.handleEditCategory.bind(this);
    this.handleShowDeleteModal = this.handleShowDeleteModal.bind(this);
    this.handleChangeSearchInput = this.handleChangeSearchInput.bind(this);
    this.handleSearchCategory = this.handleSearchCategory.bind(this);
    this.handleSearchClickButton = this.handleSearchClickButton.bind(this);
    this.handleChangeCatePageNumbers = this.handleChangeCatePageNumbers.bind(this);
    this.changePageNumberFilter = this.changePageNumberFilter.bind(this);
  }

  componentDidMount() {
    this.props.dispacthGetCategoryList("");
  }

  componentWillUnmount() {
    this.props.dispatchResetCateMeta();
  }

  handleEditCategory(id) {
    this.props.history.push(`/category/edit/${id}`);
  }

  handleRedirectLink() {
    this.props.history.push('/category/add');
  }

  handleShowDeleteModal(id) {
    this.props.dispatchShowModal();
    this.props.dispatchSetModalProp({
      children: <DeleteModal handleDeleteCategory={() => this.props.dispatchHandleDeleteCategory(id)} />
    });
  }

  handleSearchCategory(e) {
    const { categoryMeta: { searchKey } } = this.props;

    if(e.keyCode === 13) {
      this.props.dispacthGetCategoryList(searchKey);
    }
  }

  handleSearchClickButton() {
    const { categoryMeta: { searchKey } } = this.props;

    this.props.dispacthGetCategoryList(searchKey);
  }

  changePageNumberFilter(e) {
    this.props.dispatchChangePageNumberFilter(parseInt(e.target.value));
  }

  handleChangeSearchInput(e) {
    this.props.dispatchOnChangeSearch(e.target.value);
  }

  handleChangeCatePageNumbers(page) {
    this.props.dispatchChangeCatePageNumber(page);
  }

  render() {
    const { categoryList, categoryMeta: { searchKey, perPage, currentPage } } = this.props;
    const categoryListTotal = categoryList ? categoryList.length : 0;

    const indexOfLastCateList = currentPage * perPage;
    const indexOfFirstCateList = indexOfLastCateList - perPage;
    const currentCategoryList = categoryList.slice(indexOfFirstCateList, indexOfLastCateList);

    return (
      <CategoryListPageWrapper>
        <CategoryListHead>
          <h2>Category List Test</h2>
          <Button className="add-button" onClick={this.handleRedirectLink}> + Add Category</Button>
          <SearchWrapper>
            <input
              type="text"
              onChange={this.handleChangeSearchInput}
              onKeyDown={this.handleSearchCategory}
              value={searchKey}
            />
            <button onClick={this.handleSearchClickButton}>Search</button>
          </SearchWrapper>
          <PageNumberFilter>
            Page Number Filter:
            <select name="page-number-options" onChange={this.changePageNumberFilter} value={perPage}>
              {
                catePageNumberOptions.map((item, index) => (<option key={index} value={item}>{item}</option>))
              }
            </select>
          </PageNumberFilter>
        </CategoryListHead>
        <CategoryListContainer>
          <CategoryTable>
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Parent Category</th>
                <th>Group</th>
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                currentCategoryList && currentCategoryList.map((category) => (
                  <tr key={category.id}>
                    <td>
                      <Link to={`/category/edit/${category.id}`}>{category.category_name}</Link>
                    </td>
                    <td>{category.category_parent}</td>
                    <td>{category.group}</td>
                    <td>{
                      category.authority_user && category.authority_user.map((user, index) => <p key={index}>{user}</p>)
                      }
                    </td>
                    <td>
                      <ButtonGroup>
                        <Button className="delete-btn" onClick={() =>this.handleShowDeleteModal(category.id)}>Delete</Button>
                        <Button onClick={() => this.handleEditCategory(category.id)}>Edit Category</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </CategoryTable>
          {
            (categoryListTotal > perPage) && (
              <PaginationWrapper>
                <Pagination
                  defaultPageSize={perPage}
                  onChange={this.handleChangeCatePageNumbers}
                  total={ categoryListTotal }
                  defaultCurrent={ currentPage }
                />
              </PaginationWrapper>
            )
          }
        </CategoryListContainer>
      </CategoryListPageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.categoryReducer.categoryList,
  isShowDeleteModal: state.categoryReducer.isShowDeleteModal,
  categoryMeta: state.categoryReducer.categoryMeta,
});

const mapDispatchToProps = (dispatch) => ({
  dispacthGetCategoryList:(data) => dispatch(getCategoryList(data)),
  dispatchHandleShowDeleteModal:() => dispatch(showModal()),
  dispatchShowModal:() => dispatch(showModal()),
  dispatchSetModalProp:(data) => dispatch(setModalProp(data)),
  dispatchHandleDeleteCategory: (data) => dispatch(handleDeleteCategory(data)),
  dispatchOnChangeSearch: (data) => dispatch(onChangeSearch(data)),
  dispatchChangeCatePageNumber: (data) => dispatch(changeCatePageNumbers(data)),
  dispatchChangePageNumberFilter: (data) => dispatch(changePageNumberFilter(data)),
  dispatchResetCateMeta: () => dispatch(resetCategoryMeta()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
