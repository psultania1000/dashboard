import DataPanel from "./components/DataPanel";
import DataVisualPanel from "./components/DataVisualPanel";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="max-h-full bg-gray-100 p-4">
        <div className="flex">
          <Sidebar />
          <DataPanel />
          <DataVisualPanel />
        </div>
      </div>
    </>
  );
}

export default App;
