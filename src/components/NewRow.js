import React, { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions/actionAddBooks";


const NewRow = ({ libraryData, addBook}) => {
  console.log(libraryData);

  const initialState = {
    title: "",
    author: "",
  };

  const [newData, setNewData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newData);
  };

  console.log(libraryData)

  return (
    <tr className="bg-gray-100">
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <form onSubmit={handleSubmit}>
            <input
              value={newData.title}
              type="text"
              class="text-sm text-gray-600 py-1 rounded-md outline-none w-28 pl-2"
              placeholder="Title"
              onChange={(e) =>
                setNewData({ ...newData, title: e.target.value })
              }
            />
          </form>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <form onSubmit={handleSubmit}>
            <input
              value={newData.author}
              type="text"
              class="text-sm text-gray-600 py-1 rounded-md outline-none w-28 pl-2"
              placeholder="Author"
              onChange={(e) =>
                setNewData({ ...newData, author: e.target.value })
              }
            />
          </form>
        </div>
      </td>

      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-gray-300 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-hourglass-split"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
            </svg>
            Pending
          </span>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="text-sm text-gray-600 py-1 rounded-md outline-none">
            Today
          </span>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <button
            onClick={handleSubmit}
            type="submit"
            class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
          >
            Save
          </button>
        </div>
      </td>
    </tr>
  );
};

const addStateToProps = (state) => {
  return {
    libraryData: state.library,
  };
};

const addDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(addBook(param)),
  };
};

export default connect(addStateToProps, addDispatchToProps)(NewRow);
