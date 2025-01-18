import logo from "../assets/logo.svg";
import dashboard from "../assets/dashboard.svg";
import chat_ai from "../assets/chat-ai.svg";
import add from "../assets/add.svg";
import user from "../assets/user.svg";

const Sidebar = () => {
  console.log(logo);
  return (
    <>
      <div className="flex flex-col p-2 rounded-2xl items-center w-16 h-screen bg-white border-r border-gray-200 py-4 space-y-4 mr-2">
        <div className="flex rounded-lg items-center justify-center">
          <img src={logo} className="border-b py-4" />
        </div>

        <img src={dashboard} />

        <img src={chat_ai} />

        <img src={add} />

        <div className="flex-grow" />

        <div className="w-10 h-10 bg-blue-400 rounded flex items-center justify-center mb-4">
          <img src={user} className="border-t py-6" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
