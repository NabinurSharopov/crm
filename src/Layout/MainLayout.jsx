import React, { useState } from "react";
import Header from "../componets/header/Header"
import Sidebar from "../componets/SideBar/Sidebar"
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const[sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          userRole="admin" 
        />
        
        <div className="flex-1 flex flex-col">
            <Header />
            
            <main className="flex-1 overflow-y-auto p-4">
              <Outlet />
            </main>
        </div>
    </div>
  )
}

export default MainLayout;