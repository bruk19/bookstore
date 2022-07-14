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
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: id,
  };
}

export function booksLoaded(books) {
  return {
    type: BOOKS_LOADED,
    payload: books,
  };
}

export async function loadBooks(dispatch) {
  try {
    const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dXhbHW84R2UylfqfKuq7/books');
    const data = await result.json();
    const books = Object.keys(data).map((key) => ({
      id: key,
      ...data[key][0],
    }));

    dispatch(booksLoaded(books));
  } catch (error) {
    dispatch(booksLoaded([]));
  }
}