import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const TimeSpentChart = ({
  data,
  height = 300,
  title = "Session Duration",
  subtitle = "Jan 1 – Jan 31, 2023"
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="flex space-x-2 text-sm">
          <div className="px-3 py-1 bg-[#7C5832]/10 text-[#7C5832] rounded-md font-medium">
            Last month
          </div>
          <div className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md">
            Compare
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ left: 40, right: 20, top: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

          <XAxis
            dataKey="date"
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0, "dataMax"]}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{ borderRadius: 8 }}
            labelStyle={{ fontSize: 12 }}
            itemStyle={{ fontSize: 14 }}
          />

          {/* Area under the line */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="#7C5832"
            fillOpacity={0.1}
            isAnimationActive={false}
          />

          {/* The line itself */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#7C5832"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Bottom metrics */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-[#F8F6F3] p-4 rounded-lg">
          <h4 className="text-sm text-gray-600 mb-1">Avg. Session Time</h4>
          <p className="text-xl font-bold text-gray-800">04:27</p>
          <p className="text-xs text-green-500 font-medium mt-1">↑ 12% from last period</p>
        </div>
        <div className="bg-[#F8F6F3] p-4 rounded-lg">
          <h4 className="text-sm text-gray-600 mb-1">Longest Session</h4>
          <p className="text-xl font-bold text-gray-800">16:42</p>
          <p className="text-xs text-gray-500 mt-1">From United States</p>
        </div>
        <div className="bg-[#F8F6F3] p-4 rounded-lg">
          <h4 className="text-sm text-gray-600 mb-1">Scroll Depth</h4>
          <p className="text-xl font-bold text-gray-800">87%</p>
          <p className="text-xs text-green-500 font-medium mt-1">↑ 5% from last period</p>
        </div>
      </div>
    </div>
  );
};

export default TimeSpentChart;
