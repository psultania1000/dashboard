import horizontal from "../assets/horizontal-line.svg";
import vertical from "../assets/vertical-line.svg";

const DataOverviewStats = () => {
  return (
    <div className="flex gap-2 p-4 bg-white">
      {/* Left Section - Stats */}
      <div className="flex flex-col gap-6 min-w-[180px] items-center justify-between">
        {/* Total Rows */}
        <div className="flex items-center gap-1 bg-gray-50 py-4 px-2 rounded-2xl">
          {/* <ListStart className="text-blue-600 w-6 h-6" /> */}
          <img src={horizontal} />
          <div>
            <div className="text-sm text-gray-500">Total Number of rows</div>
            <div className="text-xl font-semibold">34.1M</div>
          </div>
        </div>

        {/* Total Columns */}
        <div className="flex items-center gap-1 bg-gray-50 px-2 py-4 rounded-2xl">
          <img src={vertical} />
          <div>
            <div className="text-sm text-gray-500">Total No of Columns</div>
            <div className="text-xl font-semibold">2</div>
          </div>
        </div>
      </div>

      {/* Middle Section - Metadata */}
      <div className="min-w-[250px] bg-gray-50 rounded-2xl p-4">
        <div className="text-base font-medium mb-3">Metadata</div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Name</span>
            <span>Samples</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Created at</span>
            <span>20 Jul 2022</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Relates to</span>
            <span>dim_books</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Connection</span>
            <span>Postgresql</span>
          </div>
        </div>
      </div>

      {/* Right Section - SLA */}
      <div className="flex  bg-gray-50 rounded-2xl p-4 ">
        <div className="space-y-4 items-center justify-center">
          {/* SLA Bar */}
          <div className="flex flex-col">
            <div className="flex justify-between mb-1">
              <span className="text-base">SLA</span>
              <span className="text-gray-600">5/5</span>
            </div>
            <div className="min-w-[200px] h-2 bg-green-500 rounded-full"></div>
          </div>

          {/* Test Report */}
          <div className="space-y-2">
            <div className="flex justify-between mb-1">
              <span className="text-base">Test report</span>
              <span className="text-blue-600 text-sm hover:underline cursor-pointer">
                See all
              </span>
            </div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">100% Score</span>
              <span className="text-gray-600 text-sm">5 Test</span>
            </div>
            <div className="w-full h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataOverviewStats;
