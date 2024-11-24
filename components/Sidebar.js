import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          Voice Bot Dashboard
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <Link
          href="/dashboard"
          className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
            router.pathname === "/dashboard"
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-blue-50"
          }`}
        >
          <span>Overview</span>
        </Link>

        {/* Add more navigation items as needed */}
        <Link
          href="/dashboard/agents"
          className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
            router.pathname === "/dashboard/agents"
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-blue-50"
          }`}
        >
          <span>Agents</span>
        </Link>

        <Link
          href="/dashboard/analytics"
          className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
            router.pathname === "/dashboard/analytics"
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-blue-50"
          }`}
        >
          <span>Analytics</span>
        </Link>

        <Link
          href="/dashboard/settings"
          className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
            router.pathname === "/dashboard/settings"
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-blue-50"
          }`}
        >
          <span>Settings</span>
        </Link>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            {/* User initial or avatar */}U
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">User Name</p>
            <p className="text-xs text-gray-500">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
