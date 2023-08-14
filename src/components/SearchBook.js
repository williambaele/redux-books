import React from 'react';
import SearchForm from "./SearchForm.js"
import BookCard from './BookCard.js';

const SearchBook = () => {
  return (
    <div className="w-full h-full p-6">
      <SearchForm/>
      <div className="grid gap-4 py-10">
        <BookCard/>
      </div>
    </div>
  );
};

export default SearchBook;
