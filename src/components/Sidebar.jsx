import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Book,
  Users,
  Building,
  LogOut,
  Settings,
  UserPlus,
  AlertCircle,
} from "lucide-react";
import whitelogo from "../assets/images/whitelogo.jpg";
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [currentTime, setCurrentTime] = useState("");
  return (
    <div className="flex min-h-screen font-sans bg-gray-100 sidebar">
      <aside className="w-64 bg-black text-white p-4 flex flex-col border-l-4 shadow-lg rounded-r-lg">
        {/* Logo and App Name */}
        <div className="flex items-center mb-10 mt-2">
          {/* Using a simple div for the logo, representing the "Inkwell-Hall" icon.
              In a real app, this would be an SVG or image. */}
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
            {/* <span className="text-black text-lg font-bold">I</span  > */}
            <img src={whitelogo} alt="" className="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Inkwell-Hall</h1>
            <p className="text-xs text-gray-400 -mt-1">LIBRARY</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow">
          <ul>
            {/* Dashboard Item */}
            <li className="mb-2">
              <SidebarItem
                icon={<LayoutDashboard className="w-5 h-5 mr-3" />}
                text="Dashboard"
                isActive={activeItem === "Dashboard"}
                onClick={() => setActiveItem("Dashboard")}
              />
            </li>
            {/* Collections Item (formerly Catalog) */}
            <li className="mb-2">
              <SidebarItem
                icon={<BookOpen className="w-5 h-5 mr-3" />}
                text="Collections"
                isActive={activeItem === "Collections"}
                onClick={() => setActiveItem("Collections")}
              />
            </li>
            {/* Books Item */}
            <li className="mb-2">
              <SidebarItem
                icon={<Book className="w-5 h-5 mr-3" />}
                text="Books"
                isActive={activeItem === "Books"}
                onClick={() => setActiveItem("Books")}
              />
            </li>
            {/* Users Item */}
            <li className="mb-2">
              <SidebarItem
                icon={<Users className="w-5 h-5 mr-3" />}
                text="Users"
                isActive={activeItem === "Users"}
                onClick={() => setActiveItem("Users")}
              />
            </li>
            {/* Branches Item */}
            <li className="mb-2">
              <SidebarItem
                icon={<Building className="w-5 h-5 mr-3" />}
                text="Branches"
                isActive={activeItem === "Branches"}
                onClick={() => setActiveItem("Branches")}
              />
            </li>
          </ul>
        </nav>

        {/* Log Out Item - pushed to the bottom using flex-grow on nav */}
        <div className="mt-auto">
          <SidebarItem
            icon={<LogOut className="w-5 h-5 mr-3" />}
            text="Log Out"
            isActive={activeItem === "Log Out"}
            onClick={() => setActiveItem("Log Out")}
          />
        </div>
      </aside>
    </div>
  );
};

export function SidebarItem({ icon, text, isActive, onClick }) {
  return (
    <button
      className={`
        w-full flex items-center p-3 rounded-lg text-left transition-colors duration-200
        ${
          isActive
            ? "bg-white text-black shadow-md"
            : "hover:bg-gray-800 text-white" // Hover state for non-active items
        }
      `}
      onClick={onClick}
    >
      {icon} {/* Render the Lucide React icon */}
      <span className="font-medium">{text}</span>
    </button>
  );
}

// Updated DashboardContent component
function DashboardContent() {
  return (
    <div className="space-y-8">
      {" "}
      {/* Adjusted outer padding and spacing */}
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Inkwell-Hall Dashboard
        </h2>
        <p className="text-gray-600">
          This is your central hub for managing the library system.
        </p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Total User Base Card */}
        <div className="flex items-center bg-indigo-50 rounded-lg p-6 shadow space-x-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Users className="text-indigo-700" size={32} />
          </div>
          <div>
            <div className="text-xs text-gray-500">Total User Base</div>
            <div className="text-2xl font-bold text-indigo-700">150</div>
          </div>
        </div>
        {/* Overdue Borrowers Card */}
        <div className="flex items-center bg-red-50 rounded-lg p-6 shadow space-x-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertCircle className="text-red-600" size={32} />
          </div>
          <div>
            <div className="text-xs text-gray-500">Overdue Borrowers</div>
            <div className="text-2xl font-bold text-red-600">10</div>
          </div>
        </div>
        {/* Total Book Count Card */}
        <div className="flex items-center bg-green-50 rounded-lg p-6 shadow space-x-4">
          <div className="bg-green-100 p-3 rounded-full">
            <BookOpen className="text-green-700" size={32} />
          </div>
          <div>
            <div className="text-xs text-gray-500">Total Book Count</div>
            <div className="text-2xl font-bold text-green-700">1500</div>
          </div>
        </div>
      </div>
      {/* Library Info */}
      <div className="bg-white rounded-lg shadow p-4 border border-indigo-100">
        <div className="font-semibold text-indigo-700">
          Inkwell-Hall Library
        </div>
        <div className="text-sm text-gray-500">Branch ID: 1</div>
        <div className="text-sm text-gray-500">
          Admin: Angela Adubea (ID: 1)
        </div>
        <div className="text-sm text-green-600 font-bold">Active</div>
      </div>
    </div>
  );
}
export default Sidebar;
