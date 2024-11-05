import React from "react";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
