import { ADD_BOOKS, DELETE_BOOK, DELETE_BOOKS } from "../constants";
import { v4 as uuiv4 } from "uuid";

const initialState = {
  books: [],
};

// HELPER
const helperAddData = (action) => {
  return {
    id: uuiv4(),
    title: action.payload.title,
    author: action.payload.author,
  };
};

// HELPER FOR DELETE
const removeDataByID = (state, id) => {
  const books = state.filter((book) => book.id !== id);
  return books;
};

// REDUCER
const reducerAddBooks = (state = initialState.books, action) => {
  if (localStorage.getItem("booksData")) {
    state = JSON.parse(localStorage.getItem("booksData"));
  }
  switch (action.type) {
    case ADD_BOOKS:
      state = [...state, helperAddData(action)];
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;

    case DELETE_BOOK:
      const updatedBooks = removeDataByID(state, action.payload);
      localStorage.setItem("booksData", JSON.stringify(updatedBooks));
      return updatedBooks;

    case DELETE_BOOKS:
      state = [];
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};

export default reducerAddBooks;
