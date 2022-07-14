import {
  applyMiddleware, combineReducers, createStore, compose,
} from 'redux';
import { combineReducers, createStore } from 'redux';
import books from './books/Books';
import categories from './catagories/Catagories';

const reducers = combineReducers({
  books,
  categories,
});
const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const bookstoreStore = createStore(
  reducers,
  enhancers,
);

export default bookstoreStore;