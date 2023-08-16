import React, { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions/actionAddBooks";
import { toast } from "react-toastify";

const NewRow = ({ libraryData, addBook, onNewDataAdded }) => {
  const initialState = {
    title: "",
    author: "",
  };

  const [newData, setNewData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newData);
    onNewDataAdded();
    toast.success("New book created!");
  };
 
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
