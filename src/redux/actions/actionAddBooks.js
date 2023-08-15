import { ADD_BOOKS, DELETE_BOOK, DELETE_BOOKS } from "../constants";

export const addBook = data => {
  return {
    type: ADD_BOOKS,
    payload: data,
  };
};


export const deleteBook = id => {
  return {
    type: DELETE_BOOK ,
    payload: id,
  };
};

export const deleteBooks = id => {
  return {
    type: DELETE_BOOKS,
  };
};
