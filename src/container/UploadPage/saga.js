import { put, all, takeLatest } from 'redux-saga/effects';
import { HANDLE_UPLOAD_PROFILE } from './constants';
import { push } from 'connected-react-router';
import axios from 'axios';
const axiosIntance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'content-type': 'multipart/form-data',
  }
})

function* uploadProfileSagaProcess({profile}) {
  try {
    axiosIntance.post('upload-profile', profile)
      .then(function (response) {
        console.log("post profile success!!!")
      })
      .catch(function (error) {
        console.log(error);
      });
        yield put(push('/upload-profile'));
  }
  catch (e) {
    yield put(push('/upload-profile'));
  }
}

function* uploadProfileSaga() {
  yield all([
    yield takeLatest(HANDLE_UPLOAD_PROFILE, uploadProfileSagaProcess)
  ]);
}

export default uploadProfileSaga;