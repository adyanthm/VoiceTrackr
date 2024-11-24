export default function AgentsList() {
    const agents = [
      { id: 1, name: 'Customer Service Bot', status: 'active', usage: '45%', lastTrained: '2024-01-15' },
      { id: 2, name: 'Sales Assistant', status: 'active', usage: '78%', lastTrained: '2024-01-14' },
      // Add more agents...
    ];
  
    return (
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Agent Name</th>
            <th className="text-left py-3">Status</th>
            <th className="text-left py-3">API Usage</th>
            <th className="text-left py-3">Last Trained</th>
            <th className="text-left py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map(agent => (
            <tr key={agent.id} className="border-b">
              <td className="py-3">{agent.name}</td>
              <td className="py-3">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {agent.status}
                </span>
              </td>
              <td className="py-3">{agent.usage}</td>
              <td className="py-3">{agent.lastTrained}</td>
              <td className="py-3">
                <button className="text-blue-500 hover:text-blue-700">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }