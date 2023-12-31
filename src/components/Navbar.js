import React, { useState } from "react";

const Navbar = ({ activeMenu, setActiveMenu }) => {
  return (
    <nav class="w-full h-content">
      <div class="sticky h-14 top-0 z-20 border-y md:px-8 lg:hidden">
        <div class="flex items-center py-4 gap-4 px-4">
          <button
            class="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar-dark"
            aria-controls="application-sidebar-dark"
            aria-label="Toggle navigation"
          >
            <svg
              class="w-5 h-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div className="flex gap-4">
            <p
              className={`text-sm cursor-pointer  ${
                activeMenu === "dashboard"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveMenu("dashboard")}
            >
              Dashboard
            </p>
            <p
              className={`text-sm cursor-pointer  ${
                activeMenu === "search"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveMenu("search")}
            >
              Search
            </p>
          </div>
        </div>
      </div>

      <div class="hidden h-screen  z-[60] bg-gray-900 border-r border-gray-800 pt-7 pb-10   lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
        <div class="px-6">
          <a
            class="flex-none text-xl font-semibold text-white"
            href="/"
            aria-label="Brand"
          >
            Library
          </a>
        </div>

        <nav
          class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul class="space-y-1.5">
            <li>
              <div
                className={`flex items-center gap-x-3 py-2 px-2.5 text-sm rounded-md cursor-pointer ${
                  activeMenu === "dashboard"
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white-300"
                }`}
                onClick={() => setActiveMenu("dashboard")}
              >
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                Dashboard
              </div>
            </li>
            <li>
              <div
                className={`flex items-center gap-x-3 py-2 px-2.5 text-sm rounded-md cursor-pointer ${
                  activeMenu === "search"
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white-300"
                }`}
                onClick={() => setActiveMenu("search")}
              >
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
                Search a book
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
