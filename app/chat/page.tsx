'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@/components/Sidebar').then(mod => mod.Sidebar), { ssr: false });
const Header = dynamic(() => import('@/components/Header').then(mod => mod.Header), { ssr: false });
const ChatInterface = dynamic(() => import('@/components/ChatInterface').then(mod => mod.ChatInterface), { ssr: false });

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out z-30`}>
        <Sidebar toggleSidebar={toggleSidebar}   />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <ChatInterface />
      </div>
    </div>
  );
}
