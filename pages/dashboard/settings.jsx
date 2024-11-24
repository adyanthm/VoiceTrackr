import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    apiKey: 'sk-1234567890abcdef',
    maxConcurrentCalls: 10,
    recordCalls: true,
    language: 'en',
    timezone: 'UTC',
    notifications: {
      email: true,
      slack: false,
      discord: false
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings update
    console.log('Settings updated:', settings);
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Settings</h1>

        <div className="max-w-3xl">
          <form onSubmit={handleSubmit}>
            {/* API Configuration */}
            <div className="bg-white rounded-lg shadow mb-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium">API Configuration</h2>
                <p className="mt-1 text-sm text-gray-500">Manage your API settings and keys</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">API Key</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="password"
                      value={settings.apiKey}
                      onChange={(e) => setSettings({...settings, apiKey: e.target.value})}
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Regenerate
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Max Concurrent Calls</label>
                  <input
                    type="number"
                    value={settings.maxConcurrentCalls}
                    onChange={(e) => setSettings({...settings, maxConcurrentCalls: parseInt(e.target.value)})}
                    className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* General Settings */}
            <div className="bg-white rounded-lg shadow mb-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium">General Settings</h2>
                <p className="mt-1 text-sm text-gray-500">Configure general application settings</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Record Calls</label>
                    <p className="mt-1 text-sm text-gray-500">Store call recordings for quality assurance</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({...settings, recordCalls: !settings.recordCalls})}
                    className={`${
                      settings.recordCalls ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    <span className={`${
                      settings.recordCalls ? 'translate-x-5' : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Language</label>
                  <select
                    value={settings.language}
                    onChange={(e) => setSettings({...settings, language: e.target.value})}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Timezone</label>
                  <select
                    value={settings.timezone}
                    onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="UTC">UTC</option>
                    <option value="EST">EST</option>
                    <option value="PST">PST</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow mb-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium">Notifications</h2>
                <p className="mt-1 text-sm text-gray-500">Configure how you receive notifications</p>
              </div>
              <div className="p-6 space-y-6">
                {Object.entries(settings.notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 capitalize">{key} Notifications</label>
                      <p className="mt-1 text-sm text-gray-500">Receive notifications via {key}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          [key]: !value
                        }
                      })}
                      className={`${
                        value ? 'bg-blue-600' : 'bg-gray-200'
                      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                      <span className={`${
                        value ? 'translate-x-5' : 'translate-x-0'
                      } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}