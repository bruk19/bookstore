
const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}