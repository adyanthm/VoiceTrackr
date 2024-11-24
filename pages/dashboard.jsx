import { useRouter } from 'next/router';
import DashboardLayout from '@/components/DashboardLayout';
import StatusCard from '@/components/StatusCard';
import UsageChart from '@/components/UsageChart';
import ResponseTimeChart from '@/components/ResponseTimeChart';
import AgentsList from '@/components/AgentsList';

export default function Dashboard() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatusCard 
            title="Active Agents"
            value="5/10"
            status="good"
          />
          <StatusCard 
            title="API Usage"
            value="85%"
            status="warning"
          />
          <StatusCard 
            title="Training Status"
            value="Complete"
            status="good"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-4">API Calls / Hour</h3>
            <UsageChart />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Response Time</h3>
            <ResponseTimeChart />
          </div>
        </div>

        {/* Agents List */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Active Agents</h3>
          <AgentsList />
        </div>
      </div>
    </DashboardLayout>
  );
}