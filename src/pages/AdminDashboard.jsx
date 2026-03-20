import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#fffaf8]">
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col">
        <header className="flex items-center gap-4 border-b border-[#f1e1e7] bg-white px-5 py-4 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2 text-[#7b5e67] hover:bg-[#f9edf2] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="font-display text-lg font-semibold text-[#49353d]">
            Content Manager
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-5 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
