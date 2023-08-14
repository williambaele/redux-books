import { ADD_BOOKS } from "../constants";

const initialState = {
  books: [],
};

// HELPER
const helperAddData = () => {
  return {
    id: uuiv4(),
    title: action.payload.title,
    author: action.payload.author,
  };
};

// REDUCER

const reducerAddBooks = (state = initialState.books, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      state = [...state, helperAddData(action)];
      return state;

    default:
      break;
  }
};

export default reducerAddBooks
