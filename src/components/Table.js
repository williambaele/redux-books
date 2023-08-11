import React, { useState } from "react";
import Row from "./Row.js";
import NewRow from "./NewRow.js";

const Table = () => {
  const headings = ["Name", "Created by", "API key", "Status", "Created"];

  const [visibleNewRow, setVisibleNewRow] = useState(false);
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
                    {visibleNewRow && <NewRow />} <Row />
                  </tbody>
                </table>

                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-semibold text-gray-800 dark:text-gray-200">
                        6
                      </span>{" "}
                      results
                    </p>
                  </div>

                  <div>
                    <div class="inline-flex gap-x-2">
                      <button
                        type="button"
                        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        <svg
                          class="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                          />
                        </svg>
                        Prev
                      </button>

                      <button
                        type="button"
                        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        Next
                        <svg
                          class="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
