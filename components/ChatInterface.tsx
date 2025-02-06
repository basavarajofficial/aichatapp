"use client"

import React, { useState, useEffect } from 'react';
import { MessageSquare, FileText, Settings, LogOut, Send, Bell, History, Menu } from 'lucide-react';

const ChatInterface = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [message, setMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setSidebarOpen(window.innerWidth >= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative
        ${isMobile ? 'inset-y-0 left-0 z-30' : ''}
        ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-16'}
        bg-gray-800 transition-all duration-300 flex flex-col
      `}>
        {/* Logo Section */}
        <div className="p-4 flex items-center gap-2">
          <div className="bg-orange-500 rounded p-1 shrink-0">
            <MessageSquare size={20} />
          </div>
          {isSidebarOpen && <span className="font-semibold truncate">SourceBytes.AI</span>}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <NavItem icon={<MessageSquare />} label="Dashboard" isOpen={isSidebarOpen} isActive />
          <NavItem icon={<FileText />} label="Documents" isOpen={isSidebarOpen} />
          <NavItem icon={<Settings />} label="Settings" isOpen={isSidebarOpen} />
        </nav>

        {/* Bottom Section */}
        <div className="p-4 shrink-0">
          {isSidebarOpen ? (
            <div className="bg-orange-500 rounded-lg p-4">
              <h3 className="font-semibold mb-2 truncate">SourceBytes.AI</h3>
              <p className="text-sm">Transforming Enterprises with Generative AI</p>
            </div>
          ) : (
            <div className="bg-orange-500 rounded-lg p-2 flex justify-center">
              <MessageSquare size={20} />
            </div>
          )}
          <button className="mt-4 flex items-center gap-2 text-gray-400 hover:text-white w-full justify-center">
            <LogOut size={20} className="shrink-0" />
            {isSidebarOpen && <span className="truncate">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b border-gray-700 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-800 rounded-lg shrink-0"
            >
              <Menu size={20} />
            </button>
            <h1 className="font-semibold truncate">
              Powering Enterprise Innovation with Gen-AI
            </h1>
          </div>
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <button className="p-2 hover:bg-gray-800 rounded-lg hidden sm:block">
              <Bell size={20} />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg hidden sm:block">
              <History size={20} />
            </button>
            <div className="bg-gray-800 px-3 py-1 rounded-lg text-sm">
              0/50
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 p-4 md:p-6 flex flex-col justify-center items-center overflow-y-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">
            What can I help with?
          </h2>
          <div className="w-full max-w-2xl">
            <div className="flex gap-2">
              <button className="p-2 bg-gray-800 rounded-lg shrink-0">
                <MessageSquare size={20} />
              </button>
              <div className="flex-1 flex gap-2 min-w-0">
                <input
                  type="text"
                  placeholder="Write here....."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 min-w-0"
                />
                <button className="p-2 bg-orange-500 rounded-lg hover:bg-orange-600 shrink-0">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Nav Items
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  isActive?: boolean;
}

const NavItem = ({ icon, label, isOpen, isActive = false }: NavItemProps) => (
  <button
    className={`w-full flex items-center gap-2 p-2 rounded-lg mb-1 ${
      isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
    }`}
  >
    {icon}
    {isOpen && <span>{label}</span>}
  </button>
);

export default ChatInterface;
