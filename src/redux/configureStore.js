import {applyMiddleware, combineReducers, createStore, compose,} from 'redux';
import books from './books/Books';
import thunk from 'redux-thunk';
import categories from './catagories/Catagories';

const reducers = combineReducers({
  books,
  categories,
});
const enhancers = compose(
  applyMiddleware(),
);

const bookstoreStore = createStore(reducers, applyMiddleware(thunk));

export default bookstoreStore;