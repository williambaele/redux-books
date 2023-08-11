// import Navbar from "./components/Navbar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import SearchBook from "./components/SearchBook";

function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="flex flex-col h-screen md:flex-wrap">
      <div className="max-w-full bg-gray-300 md:w-1/6 h-content">
        <Navbar  activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className="w-full h-full bg-gray-200 md:w-5/6">
        {activeMenu === "dashboard" ? <Table /> : <SearchBook />}
      </div>
    </div>
  );
}

export default App;
