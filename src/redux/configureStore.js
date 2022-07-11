import { combineReducers, createStore } from 'redux';
import books from './books/Books';
import categories from './catagories/Catagories';

const reducers = combineReducers({
  books,
  categories,
});
const bookstoreStore = createStore(reducers);

export default bookstoreStore;