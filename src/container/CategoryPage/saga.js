import { push } from 'connected-react-router';
import axios from 'axios';
import { all, takeLatest, put, call } from 'redux-saga/effects';
import { closeModal } from '../GlobalModal/actions';
import {
  getCategoryListFailure,
  getCategoryListSuccess,
  getCategoryByIdSuccess,
  getCategoryByIdFailure,
  getCategoryList,
} from './actions';
import {
  HANDLE_CREATE_CATEGORY_SUBMIT,
  GET_CATEGORY_LIST,
  GET_CATEGORY_BY_ID,
  HANDLE_EDIT_CATEGORY,
  HANDLE_DELETE_CATEGORY,
} from './constants';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/'
});

const request = (method, options) => {
  return axiosInstance({
    ...options,
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => {
    const status = res.data.code;
    if(status === 200 ){
      return Promise.resolve(res.data);
    }
    return Promise.reject({ status, res });
  })
  .catch(err => Promise.reject(err));
}

function* handleCreateCateforySubmitProcess({ category }){
  try {
  const data = yield call(request, 'POST', { url: 'category', data: JSON.stringify(category) });
  if (data.success === 'true')
    yield put(push('/category'));
  }
  catch(e) {
    yield put(push('/category'));
  }
}

function* handleGetCategoryListProcess({ searchKey }) {
  try {
    const res = yield call(request, 'GET', { url: 'category-list', params: { searchKey: searchKey.trim() } });
    yield put(getCategoryListSuccess(res.categoryList));
  } catch(e) {
    yield put(getCategoryListFailure());
  }
}

function* handleGetCategoryByIdProcess({ id }) {
  try {
    // call api
    const res = yield call(request, 'GET', { url: 'category-detail', params: { id: id } } );
    yield put(getCategoryByIdSuccess(res.category));
  }
  catch(e) {
    yield put(getCategoryByIdFailure());
  }
}

function* handleEditCategoryProcess({ category }) {
  try {
    const id = category.id;
    const res = yield call(request, 'PUT', {url: `category/${id}`, data: category});
    if(res.success === true) {
      yield put(push('/category'));
    }
  }
  catch(e) {
    console.log('Update error', e);
  }
}

function* handleDeleteCategoryProcess({ id }) {
  try {
    yield call(request, 'DELETE', { url: `category/${id}`});
    yield put(closeModal());
    yield put(getCategoryList(""));
    yield put(push('/category'));
  }
  catch(e) {
    console.log('Delete error', e);
  }
}

function* categorySaga() {
  yield all([
    yield takeLatest(HANDLE_CREATE_CATEGORY_SUBMIT, handleCreateCateforySubmitProcess),
    yield takeLatest(GET_CATEGORY_LIST, handleGetCategoryListProcess),
    yield takeLatest(GET_CATEGORY_BY_ID, handleGetCategoryByIdProcess),
    yield takeLatest(HANDLE_EDIT_CATEGORY, handleEditCategoryProcess),
    yield takeLatest(HANDLE_DELETE_CATEGORY, handleDeleteCategoryProcess),
  ]);
}

export default categorySaga;