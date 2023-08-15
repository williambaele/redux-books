import React, { useState } from "react";
import Row from "./Row.js";
import NewRow from "./NewRow.js";
import { connect } from "react-redux";
import { deleteBooks } from "../redux/actions/actionAddBooks";

const Table = ({ libraryData, deleteBooks }) => {
  const headings = ["Name", "Author", "Status", "Created"];
  const [visibleNewRow, setVisibleNewRow] = useState(false);
  const handleNewDataAdded = () => {
    setVisibleNewRow(false); // Hide the NewRow component
  };

  //BOOKS DATA
  let displayData;
  if (libraryData === undefined) {
    displayData = <div>Loading...</div>;
  } else if (libraryData.length === 0) {
    displayData = <div className="w-full bg-red-400">No books available</div>;
  } else {
    displayData = libraryData.map((data) => <Row key={data.id} data={data} />);
  }

  //DELETE ALL BOOKS BTN
  let deleteAllButton;
  if (libraryData === undefined) {
    deleteAllButton = <div>Loading...</div>;
  } else if (libraryData.length === 0) {
    deleteAllButton = "";
  } else {
    deleteAllButton = (
      <button
        type="button"
        onClick={() => deleteBooks()}
        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm hover:bg-red-500 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
        </svg>
        Delete all books
      </button>
    );
  }

  let numberOfBooks;
  if (libraryData === undefined) {
    numberOfBooks = "No ";
  } else {
    numberOfBooks = libraryData.length;
  }

  return (
    <div className="w-full h-full p-6">
      <div className="w-full h-full">
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 w-full inline-block align-middle">
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Your personnal library
                    </h2>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Manage all your favorite books in a minute.
                    </p>
                  </div>

                  <div>
                    <div class="inline-flex gap-x-2">
                      <div
                        class="cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        onClick={() => setVisibleNewRow(!visibleNewRow)}
                      >
                        <svg
                          class="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                        Create
                      </div>
                    </div>
                  </div>
                </div>
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      {headings.map((heading, index) => (
                        <th scope="col" class="px-6 py-3 text-left">
                          <div key={index} class="flex items-center gap-x-2">
                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              {heading}
                            </span>
                          </div>
                        </th>
                      ))}
                      <th scope="col" class="px-6 py-3 text-right"></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    {visibleNewRow && (
                      <NewRow onNewDataAdded={handleNewDataAdded} />
                    )}
                    {displayData}
                  </tbody>
                </table>

                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-semibold text-gray-800 dark:text-gray-200">
                        {numberOfBooks}
                      </span>{" "}
                      results
                    </p>
                  </div>

                  <div>{deleteAllButton}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    libraryData: state.library,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteBooks: () => dispatch(deleteBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
