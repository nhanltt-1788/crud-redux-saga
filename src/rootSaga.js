import { all } from 'redux-saga/effects'
import uploadProfileSaga from './container/UploadPage/saga';
import categorySaga from './container/CategoryPage/saga';

export default function* rootSaga() {
  yield all([
    uploadProfileSaga(),
    categorySaga(),
  ]);
}