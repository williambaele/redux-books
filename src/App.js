// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import Table2 from "./components/Table2";

function App() {
  return (
    <div className="flex flex-col md:flex-wrap h-screen">
      <div className="max-w-full md:w-1/5 h-content bg-purple-300">
        <Navbar/>
      </div>
      <div className="w-full md:w-4/5 h-full bg-green-300">
        <Table2/>
      </div>
    </div>
  );
}

export default App;
