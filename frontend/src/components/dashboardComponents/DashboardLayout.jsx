import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Ship, FileText, BarChart3, Store,
  Bell, User, Settings, ChevronLeft, ChevronRight,
  Search, LogOut
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Shipments', path: '/shipments', icon: Ship },
  { label: 'Documents', path: '/documents', icon: FileText },
  { label: 'Analytics', path: '/analytics', icon: BarChart3 },
  { label: 'Marketplace', path: '/marketplace', icon: Store },
  { label: 'Notifications', path: '/notifications', icon: Bell },
  { label: 'Profile', path: '/profile', icon: User },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-space_indigo-200 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`flex flex-col bg-space_indigo-100 border-r border-space_indigo-400/50 transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-64'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-space_indigo-400/50">
          {!collapsed && (
            <Link to="/" className="flex items-center gap-2">
              <Ship className="w-6 h-6 text-punch_red-500" />
              <span className="text-lg font-bold font-host_grotesk text-platinum-500">NAVERO</span>
            </Link>
          )}
          {collapsed && (
            <Link to="/" className="mx-auto">
              <Ship className="w-6 h-6 text-punch_red-500" />
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`text-platinum-400 hover:text-platinum-500 transition-colors ${collapsed ? 'hidden' : ''}`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto custom-scrollbar">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-punch_red-500/10 text-punch_red-500'
                    : 'text-platinum-400 hover:bg-space_indigo-300/50 hover:text-platinum-500'
                } ${collapsed ? 'justify-center' : ''}`}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-punch_red-500' : ''}`} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Expand button (when collapsed) */}
        {collapsed && (
          <div className="p-2 border-t border-space_indigo-400/50">
            <button
              onClick={() => setCollapsed(false)}
              className="w-full flex items-center justify-center py-2 text-platinum-400 hover:text-platinum-500"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Logout */}
        {!collapsed && (
          <div className="p-4 border-t border-space_indigo-400/50">
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-platinum-400 hover:bg-space_indigo-300/50 hover:text-platinum-500 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        )}
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="h-16 bg-space_indigo-100 border-b border-space_indigo-400/50 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-platinum-500 font-host_grotesk">
              Welcome back, User
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg bg-space_indigo-300/50 border border-space_indigo-500 text-platinum-500 text-sm placeholder:text-platinum-400/50 focus:outline-none focus:border-punch_red-500/50 w-64"
              />
            </div>
            <Link to="/notifications" className="relative p-2 rounded-lg hover:bg-space_indigo-300/50 transition-colors">
              <Bell className="w-5 h-5 text-platinum-400" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-punch_red-500" />
            </Link>
            <Link to="/profile" className="w-8 h-8 rounded-full bg-linear-to-br from-punch_red-500 to-flag_red-500 flex items-center justify-center text-white text-sm font-bold">
              D
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}