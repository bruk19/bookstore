const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const BOOKS_LOADED = 'BOOKS_LOADED';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BOOKS_LOADED:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload),
      ];
    default:
      return state;
  }
}

export function addBook(book) {
  return async function addBookAsync(dispatch) {
    const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dXhbHW84R2UylfqfKuq7/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        item_id: book.id,
        category: 'Fiction',
        title: book.title,
        author: book.author,
      }),
    });
    if (result.ok) {
      dispatch({ type: ADD_BOOK, payload: book });
    }
  };
}
