import React from "react";

const NewRow = () => {
  return (
    <tr className="bg-gray-100">
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <input
            type="text"
            class="text-sm text-gray-600 py-1 rounded-md outline-none w-28 pl-2"
            placeholder="Name"
          />
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <input
            type="text"
            class="text-sm text-gray-600 py-1 rounded-md outline-none w-28 pl-2"
            placeholder="Author"
          />
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
          <span class="text-sm text-gray-600 py-1 rounded-md outline-none">
            28 Dec, 12:12
          </span>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <div class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ">
            Save
          </div>
        </div>
      </td>
    </tr>
  );
};

export default NewRow;
