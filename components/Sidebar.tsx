import { MenuIcon } from "lucide-react";

interface SidebarProps {
  toggleSidebar: () => void;
}

export function Sidebar({ toggleSidebar }: SidebarProps) {
    return (
      <aside className="w-64 bg-[#2A2B32] text-white h-full flex flex-col">
        <button onClick={toggleSidebar} className="md:hidden p-2 hover:bg-gray-100 rounded-full">
        <MenuIcon className="h-6 w-6 bg-red-500" />
      </button>
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-semibold">SourceBytes.AI</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
            <span>Documents</span>
          </a>
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
            <span>Settings</span>
          </a>
        </nav>

        <div className="p-4 mt-auto border-t border-gray-700">
          <button className="w-full text-left p-2 hover:bg-gray-700 rounded">Logout</button>
        </div>
      </aside>
    );
  }
