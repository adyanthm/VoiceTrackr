import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CallsPage() {
  const [calls] = useState([
    { 
      id: 1, 
      agent: 'Customer Service Bot',
      user: 'john@example.com',
      duration: '3:45',
      timestamp: '2024-01-24 10:30 AM',
      status: 'completed',
      sentiment: 'positive'
    },
    { 
      id: 2, 
      agent: 'Sales Assistant',
      user: 'sarah@example.com',
      duration: '2:15',
      timestamp: '2024-01-24 09:45 AM',
      status: 'completed',
      sentiment: 'neutral'
    },
    // Add more call records...
  ]);

  // Sample data for the chart
  const callsData = [
    { hour: '00:00', calls: 23 },
    { hour: '04:00', calls: 15 },
    { hour: '08:00', calls: 45 },
    { hour: '12:00', calls: 68 },
    { hour: '16:00', calls: 52 },
    { hour: '20:00', calls: 31 },
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Call History</h1>
          <p className="text-gray-500 mt-2">Monitor and analyze your voice bot interactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Total Calls Today</h3>
            <p className="text-2xl font-semibold mt-2">234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Average Duration</h3>
            <p className="text-2xl font-semibold mt-2">2:45</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Success Rate</h3>
            <p className="text-2xl font-semibold mt-2">92%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Active Calls</h3>
            <p className="text-2xl font-semibold mt-2">8</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-lg font-semibold mb-4">Calls Volume</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={callsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="hour" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="calls" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Calls Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Recent Calls</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sentiment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {calls.map((call) => (
                  <tr key={call.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{call.agent}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.user}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.duration}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.timestamp}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        call.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {call.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        call.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                        call.sentiment === 'neutral' ? 'bg-gray-100 text-gray-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {call.sentiment}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}