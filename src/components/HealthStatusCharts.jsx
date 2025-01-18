import { PieChart, Pie, Cell } from "recharts";

const PieChartCard = ({ title, data }) => {
  const renderCustomizedLabel = () => {
    return null; // Remove default labels
  };

  return (
    <div>
      <div className="rounded-lg p-2 shadow-sm bg-gray-50">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">{title}</h2>
        <div className="relative w-full">
          <PieChart width={200} height={200}>
            <defs>
              {data.map((entry, index) => (
                <linearGradient
                  key={`gradient-${index}`}
                  id={`gradient-${entry.name}`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1">
                  <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                  <stop
                    offset="100%"
                    stopColor={entry.stopColor}
                    stopOpacity={1}
                  />
                </linearGradient>
              ))}
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={90}
              innerRadius={50}
              paddingAngle={2}
              cornerRadius={6}
              dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`url(#gradient-${entry.name})`}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute top-[6rem] left-[6rem] transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-gray-500 text-sm">Total Table</div>
            <div className="text-3xl font-bold">88</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 mt-2">
        {data.map((entry, index) => {
          console.log(entry);
          return (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: `${entry.color}` }}></div>
              <span className="text-[10px] text-gray-500">{entry.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const HealthStatusChart = () => {
  const tableHealthData = [
    { name: "Success", value: 55, color: "#009306", stopColor: "#85C387" },
    { name: "Failed", value: 23, color: "#FFDE69", stopColor: "#FFBF42" },
    { name: "Skipped", value: 20, color: "#122DA3", stopColor: "#2043DF" },
  ];

  const testResultsData = [
    { name: "Unknown", value: 55, color: "#4CAF50", stopColor: "#009306" },
    { name: "Broken", value: 23, color: "#FD623B", stopColor: "#FB7857" },
    { name: "Aborted", value: 20, color: "#4E6BEF", stopColor: "#5552FF" },
  ];

  const monitoredTablesData = [
    { name: "Monitored", value: 65, color: "#1a237e", stopColor: "#2532b8" },
    { name: "Unmonitored", value: 23, color: "#616161", stopColor: "#8c8282" },
  ];

  return (
    <div className="flex flex-col ">
      <div className="flex gap-4 mt-12 items-center justify-between">
        <PieChartCard title="Table Health" data={tableHealthData} />
        <PieChartCard title="Test Results Breakdown" data={testResultsData} />
        <PieChartCard title="Monitored Tables" data={monitoredTablesData} />
      </div>
    </div>
  );
};

export default HealthStatusChart;
