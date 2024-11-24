import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';
  
  export default function ResponseTimeChart() {
    const chartData = [
      { time: '00:00', responseTime: 0.8 },
      { time: '04:00', responseTime: 0.9 },
      { time: '08:00', responseTime: 1.2 },
      { time: '12:00', responseTime: 1.0 },
      { time: '16:00', responseTime: 0.9 },
      { time: '20:00', responseTime: 1.1 },
    ];
  
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
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
            <Line
              type="monotone"
              dataKey="responseTime"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }