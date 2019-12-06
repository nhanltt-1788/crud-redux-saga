import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import uploadReducer from './container/UploadPage/reducers';
import categoryReducer from './container/CategoryPage/reducers';
import modalReducer from './container/GlobalModal/reducers';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  uploadReducer,
  categoryReducer,
  modalReducer,
});

export default createRootReducer;