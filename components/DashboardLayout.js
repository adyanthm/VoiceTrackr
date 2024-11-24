import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const navigation = [
    { name: "Overview", href: "/dashboard" },
    { name: "Agents", href: "/dashboard/agents" },
    { name: "Calls", href: "/dashboard/calls" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 flex-1">
          <div className="font-bold text-xl text-blue-600 mb-8">
            Voice Bot Dashboard
          </div>
          <nav className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  router.pathname === item.href
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              U
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">User Name</p>
              <p className="text-xs text-gray-500">user@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
}
