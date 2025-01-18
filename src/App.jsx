import DataPanel from "./components/DataPanel";
import DataVisualPanel from "./components/DataVisualPanel";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen bg-gray-100 p-4">
        <div className="flex h-[calc(100%-0rem)]">
          <Sidebar />
          <DataPanel />
          <DataVisualPanel />
        </div>
      </div>
    </>
  );
}

export default App;
