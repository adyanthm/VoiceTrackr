import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';
  
  export default function UsageChart({ data }) {
    // Sample data - replace with real data from your backend
    const chartData = [
      { time: '00:00', calls: 65, responseTime: 0.8 },
      { time: '04:00', calls: 78, responseTime: 0.9 },
      { time: '08:00', calls: 90, responseTime: 1.2 },
      { time: '12:00', calls: 81, responseTime: 1.0 },
      { time: '16:00', calls: 86, responseTime: 0.9 },
      { time: '20:00', calls: 95, responseTime: 1.1 },
    ];
  
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey="time" 
              stroke="#94a3b8"
              fontSize={12}
            />
            <YAxis 
              stroke="#94a3b8"
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorCalls)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }