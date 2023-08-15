import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard.js";

const SearchBook = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (search !== "") {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20`;

      axios
        .get(apiUrl)
        .then((response) => {
          setBooks(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    }
  }, [search]);

  console.log(books);
  return (
    <div className="w-full h-full p-6 overflow-y-scroll">
      <div className="w-full h-max">
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 w-full inline-block align-middle">
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Search your next book
                    </h2>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Search and find you next gem to read !
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search a book"
                      type="text"
                      className="py-2 pl-2 bg-gray-100 rounded-md outline-none text-md"
                    />
                    <div class="flex-1 inline-flex gap-x-2">
                      <div class="cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 pt-10 pb-4">
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchBook;
