export default function StatusCard({ title, value, status }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-semibold">{value}</span>
          <span className={`px-2 py-1 rounded text-sm ${
            status === 'good' ? 'bg-green-100 text-green-800' :
            status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {status === 'good' ? '✓' : status === 'warning' ? '!' : '×'}
          </span>
        </div>
      </div>
    );
  }