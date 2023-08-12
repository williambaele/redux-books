import React from "react";
import ActionsButton from "./ActionsButton";

const Row = () => {
  return (
    <tr>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="text-sm text-gray-600 dark:text-gray-400">
            Streamlab
          </span>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <div class="flex items-center gap-x-2">
            <img
              class="inline-block h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Imag"
            />
            <div class="grow">
              <span class="text-sm text-gray-600 dark:text-gray-400">
                Christina Bersh
              </span>
            </div>
          </div>
        </div>
      </td>

      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <svg
              class="w-2.5 h-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            Successful
          </span>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="text-sm text-gray-600 dark:text-gray-400">
            28 Dec, 12:12
          </span>
        </div>
      </td>
    <ActionsButton/>
    </tr>
  );
};

export default Row;
