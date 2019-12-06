import {
  ON_CHANGE_INPUT,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_BY_ID_SUCCESS,
  SHOW_DELETE_MODAL,
  ON_CHANGE_SEARCH,
  RESET_SEARCH_INPUT,
  CHANGE_CATE_PAGE_NUMBERS,
  CHANGE_PAGE_NUMBER_FILTER,
  RESET_CATEGORY_META,
  RESET_ADD_CATE_FORM,
  UPDATE_ERRORS,
  RESET_ERRORS,
  categoryMetaInitital,
  categoryInitial,
} from './constants';

const initialState = {
  category: categoryInitial,
  categoryList: [],
  isShowDeleteModal: false,
  categoryMeta: categoryMetaInitital,
  errors: {},
}

function categoryReducer(state = initialState, action) {
  switch(action.type) {
    case ON_CHANGE_INPUT:
      return {
        ...state,
        category: {...state.category, ...action.input}
      };
    case GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryList: action.categoryList,
      }
    case GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        category: action.category,
      };
    case SHOW_DELETE_MODAL:
      return {
        ...state,
        isShowDeleteModal: true,
      }
    case ON_CHANGE_SEARCH:
      return {
        ...state,
        categoryMeta: {...state.categoryMeta, searchKey: action.searchKey}
      }
    case RESET_SEARCH_INPUT:
      return {
        ...state,
        categoryMeta: {...state.categoryMeta, searchKey: ''}
      }
    case CHANGE_CATE_PAGE_NUMBERS:
      return {
        ...state,
        categoryMeta: {...state.categoryMeta, currentPage: action.currentPage }
      }
    case CHANGE_PAGE_NUMBER_FILTER:
      return {
        ...state,
        categoryMeta: {...state.categoryMeta, perPage: action.perPage }
      }
    case RESET_CATEGORY_META:
      return {
        ...state,
        categoryMeta: categoryMetaInitital,
      }
    case RESET_ADD_CATE_FORM:
      return {
        ...state,
        category: categoryInitial,
      }
    case UPDATE_ERRORS:
      return {
        ...state,
        errors: {...action.errors},
      }
    case RESET_ERRORS:
      return {
        ...state,
        errors: {}
      }
    default:
      return state;
  }
}

export default categoryReducer;