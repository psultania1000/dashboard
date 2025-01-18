import { useState } from "react";
import outer from "../assets/outer-link.svg";
import icon from "../assets/icon-logo.svg";
import down from "../assets/down.svg";
import tick from "../assets/tick.svg";

const DataPanel = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    "SUPPLIER_references",
    "NATION_references_REGION",
    "ORDERS_references_CUSTOMER",
    "data_lake",
  ];

  const queries = [
    "Give me the summary of the data Source.",
    "User duration engagement change vs last week?",
    "Provide an overview of this week's IAP Revenue performance.",
    "What are the factors of drop in our Sales Revenue this week?",
  ];

  return (
    <div className="w-[50%] flex flex-col mr-2 h-[calc(100%)] bg-white p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Databot</h1>
          <img src={icon} />
        </div>

        <div className="relative">
          <button
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg">
            Connected Data:{" "}
            <span className="text-blue-600">Clothing Sales</span>
            <img src={down} />
            {/* <ChevronDown className="w-4 h-4" /> */}
          </button>

          {isPopoverOpen && (
            <div className="absolute right-0 w-60 bg-white shadow-lg rounded-2xl mt-2 p-4 z-50 border">
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="search Data"
                    className="w-full h-6 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`px-2 py-1.5 rounded-lg cursor-pointer text-sm break-words whitespace-normal transform transition-transform duration-200 hover:translate-x-1 ${
                      index === selectedIndex ? "bg-gray-50" : ""
                    }`}
                    onClick={() => setSelectedIndex(index)}>
                    <div className="flex">
                      <div className="break-words w-[170px]">{item}</div>
                      {index === selectedIndex && <img src={tick} />}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <hr />

      <div className="flex flex-col max-w-[48rem] mb-12 p-10 items-center justify-center">
        <h2 className="text-4xl font-bold mb-4 items-center">
          <span className="text-blue-600">AI Conversational</span> Data
        </h2>
        <p className="text-gray-600">
          Your personal AI data assistant. Seamlessly integrate your database
          for rapid, informed decision-making. Get instant analysis and answers,
          optimizing growth metrics daily. Ask anything, get analyst-grade
          responses.
        </p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ">
        {queries.map((query, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl flex justify-between items-center hover:border-blue-100 cursor-pointer group">
            <span className="text-gray-700">{query}</span>
            <img src={outer} className="border p-1 rounded-md" />
          </div>
        ))}
      </div>

      <div className="flex-grow overflow-y-auto bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Summary</h3>
        <div className="space-y-4">
          <p className="text-gray-700">
            Supplier references refer to information provided by a supplier that
            can be used to verify their capabilities and experience. This
            information is typically used during the procurement process to
            evaluate potential vendors.
          </p>
          <p className="font-bold">Basic Reference:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Supplier Name: Acme Corporation</li>
            <li>Contact Name: John Smith, Sales Manager</li>
            <li>Phone Number: (555) 555-5555</li>
            <li>Email Address: [email address removed]</li>
            <li>
              Relationship: Supplied office furniture for our headquarters in
              2023.
            </li>
          </ul>
          <p className="font-bold mt-4">Detailed Reference:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Supplier Name: Global Tech Solutions</li>
            <li>Contact Name: Jane Doe, Account Manager</li>
            <li>Phone Number: (555) 555-1234</li>
            <li>Email Address: [email address removed]</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 relative">
        <input
          type="text"
          placeholder="Ask your AI for data summary......"
          className="w-full h-12 px-4 py-2 bg-gray-100 rounded-full pr-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full flex items-center gap-2">
          <span className="text-yellow-400">✨</span>
          Search
        </button>
      </div>
    </div>
  );
};

export default DataPanel;
