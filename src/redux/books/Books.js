const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const BOOKS_LOADED = 'BOOKS_LOADED';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BOOKS_LOADED:
      return action.payload;
    case ADD_BOOK:
      return [action.payload, ...state];
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
        category: book.category,
        title: book.title,
        author: book.author,
      }),
    });
    if (result.ok) {
      dispatch({ type: ADD_BOOK, payload: book });
    }
  };
}

export function removeBook(id) {
  return async function removeBookAsync(dispatch) {
    const result = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dXhbHW84R2UylfqfKuq7/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    });
    if (result.ok) {
      dispatch({ type: REMOVE_BOOK, payload: id });
    }
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
    if (books.length === 0) {
      throw new Error('There are no books.');
    }
    dispatch(booksLoaded(books));
  } catch (error) {
    dispatch(booksLoaded([]));
  }
}