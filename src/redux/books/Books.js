const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 'ashda9ysudhasd0',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    id: 'asdahsd9qhwdoa0a9wq',
  },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
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