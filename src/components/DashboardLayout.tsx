import React from 'react';
import Sidebar from './SidebarProps';
//  import Sidebar from './SidebarProps';
 interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen scrollbar-custom bg-gray-50 w-full  ">
      <Sidebar />
      <div className="flex w-full  ">
        <div className="w-full     ">
          <div className="w-full  ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout; 
