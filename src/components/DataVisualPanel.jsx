import DataOverviewStats from "./DataOverviewStats";
import DataQuality from "./DataQuality";
import HealthStatusChart from "./HealthStatusCharts";

const DataVisualPanel = () => {
  return (
    <div className="w-[50%] h-screen rounded-2xl border-l border-gray-200 p-6 bg-white">
      <div>
        <h2 className="text-2xl font-bold mb-8">Data Visual</h2>
        <hr />
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-bold py-4 border-b border-gray-100">
          Data Overview
        </h3>

        <DataOverviewStats />
      </div>

      <div>
        <DataQuality />

        <HealthStatusChart />
      </div>
    </div>
  );
};

export default DataVisualPanel;
