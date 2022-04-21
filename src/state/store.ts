import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/';
export const store = createStore(
  rootReducer,
  // Cho phep thuc hien bat dong bo trong qua trinh dispatch len store
  applyMiddleware(thunk),
);
