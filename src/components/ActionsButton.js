import React from "react";

const ActionsButton = () => {
  return (
    <td class="h-px w-px whitespace-nowrap">
      <div class="px-6 py-1.5">
        <div class="hs-dropdown relative inline-block [--placement:bottom-right]">
          <button
            id="hs-table-dropdown-1"
            type="button"
            class="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-red-100 shadow-2xl rounded-lg p-2"
            aria-labelledby="hs-table-dropdown-1"
          >
            <div class="py-2 first:pt-0 last:pb-0">
              <a
                class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                href="/"
              >
                Rename
              </a>
              <a
                class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                href="/"
              >
                Regenrate Key
              </a>
              <a
                class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                href="/"
              >
                Disable
              </a>
            </div>
            <div class="py-2 first:pt-0 last:pb-0">
              <a
                class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                href="/"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </td>
  );
};

export default ActionsButton;
