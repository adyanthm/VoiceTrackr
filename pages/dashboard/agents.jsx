import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

function AgentsPage() {
  const [agents] = useState([
    { 
      id: 1, 
      name: 'Customer Service Bot', 
      status: 'active',
      type: 'Support',
      usage: '45%',
      lastTrained: '2024-01-15',
      description: 'Handles customer inquiries and support tickets'
    },
    { 
      id: 2, 
      name: 'Sales Assistant', 
      status: 'active',
      type: 'Sales',
      usage: '78%',
      lastTrained: '2024-01-14',
      description: 'Assists with product recommendations and sales inquiries'
    },
  ]);

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Voice Agents</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <PlusIcon className="w-5 h-5 mr-2" />
            New Agent
          </button>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{agent.name}</h3>
                  <p className="text-sm text-gray-500">{agent.type}</p>
                </div>
                <span className={`px-2 py-1 text-sm rounded-full ${
                  agent.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {agent.status}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{agent.description}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">API Usage</span>
                  <span className="text-gray-900">{agent.usage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Last Trained</span>
                  <span className="text-gray-900">{agent.lastTrained}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end space-x-3">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <PencilSquareIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AgentsPage;