import { LogOut } from 'lucide-react';
import React from 'react'

const Profile = ({sidebarOpen}:{  sidebarOpen : boolean}) => {
    const logoutHandler = async () => {
        alert("log out");


      }
  return (
    <div>
        <button onClick={logoutHandler}
           className="mt-4 flex items-center gap-2 text-gray-400 hover:text-white w-full justify-center">
            <span></span>
            <LogOut size={20} className="shrink-0" />
            {sidebarOpen && <span className="truncate">Logout</span>}
          </button>
    </div>
  )
}

export default Profile
