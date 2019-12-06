import {
  ON_CHANGE_INPUT,
  HANDLE_CREATE_CATEGORY_SUBMIT,
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_FAILURE,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_BY_ID,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE,
  HANDLE_EDIT_CATEGORY,
  HANDLE_EDIT_CATEGORY_FAILURE,
  HANDLE_EDIT_CATEGORY_SUCCESS,
  HANDLE_DELETE_CATEGORY,
  SHOW_DELETE_MODAL,
  ON_CHANGE_SEARCH,
  RESET_SEARCH_INPUT,
  CHANGE_CATE_PAGE_NUMBERS,
  CHANGE_PAGE_NUMBER_FILTER,
  RESET_CATEGORY_META,
  RESET_ADD_CATE_FORM,
  UPDATE_ERRORS,
  RESET_ERRORS,
} from './constants';

export const onChangeInput = (input) => ({
  type: ON_CHANGE_INPUT,
  input,
});

export const handleCreateCategorySubmit = (category) => ({
  type: HANDLE_CREATE_CATEGORY_SUBMIT,
  category,
});

export const getCategoryList = (searchKey) => ({
  type: GET_CATEGORY_LIST,
  searchKey,
})

export const getCategoryListSuccess = (categoryList) => ({
  type: GET_CATEGORY_LIST_SUCCESS,
  categoryList,
});


export const getCategoryListFailure = () => ({
  type: GET_CATEGORY_LIST_FAILURE,
})

export const getCategoryById = (id) => ({
  type: GET_CATEGORY_BY_ID,
  id: id,
});

export const getCategoryByIdSuccess = (category) => ({
  type: GET_CATEGORY_BY_ID_SUCCESS,
  category: category,
})

export const getCategoryByIdFailure = () => ({
  type: GET_CATEGORY_BY_ID_FAILURE,
})

export const handleEditCategory = (category) => ({
  type: HANDLE_EDIT_CATEGORY,
  category,
});

export const handleEditCategorySuccess = () => ({
  type: HANDLE_EDIT_CATEGORY_SUCCESS,
});

export const handleEditCategoryFailure = () => ({
  type: HANDLE_EDIT_CATEGORY_FAILURE,
});

export const handleDeleteCategory = (id) => ({
  type: HANDLE_DELETE_CATEGORY,
  id
});

export const showDeleteModal = () => ({
  type: SHOW_DELETE_MODAL,
});

export const onChangeSearch = (searchKey) => ({
  type: ON_CHANGE_SEARCH,
  searchKey
});

export const resetSearchInput = () => ({
  type: RESET_SEARCH_INPUT,
});

export const changeCatePageNumbers = (currentPage) => ({
  type: CHANGE_CATE_PAGE_NUMBERS,
  currentPage,
});

export const changePageNumberFilter = (perPage) => ({
  type: CHANGE_PAGE_NUMBER_FILTER,
  perPage,
});

export const resetCategoryMeta = () => ({
  type: RESET_CATEGORY_META,
})

export const resetAddCateForm = () => ({
  type: RESET_ADD_CATE_FORM,
})

export const updateErrors = (errors) => ({
  type: UPDATE_ERRORS,
  errors,
});

export const resetErrors = () => ({
  type: RESET_ERRORS,
});