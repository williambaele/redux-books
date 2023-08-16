// import Navbar from "./components/Navbar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import SearchBook from "./components/SearchBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="flex flex-col h-screen md:flex-wrap">
      <div className="max-w-full bg-gray-300 md:w-1/6 h-content">
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className="w-full h-full bg-gray-200 md:w-5/6">
        {activeMenu === "dashboard" ? <Table /> : <SearchBook />}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
