import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    month: 'Jan',
    NetWorkingCapital: 15,
    CrossWorkingCapital: 15,
  },
  {
    month: 'Feb',
    NetWorkingCapital: 16,
    CrossWorkingCapital: 16,
  },
  {
    month: 'Mar',
    NetWorkingCapital: 27,
    CrossWorkingCapital: 23,
  },
  {
    month: 'Apr',
    NetWorkingCapital: 28,
    CrossWorkingCapital: 26,
  },
  {
    month: 'May',
    NetWorkingCapital: 25,
    CrossWorkingCapital: 10,
  },
  {
    month: 'Jun',
    NetWorkingCapital: 25,
    CrossWorkingCapital: 14,
  },
  {
    month: 'Jul',
    NetWorkingCapital: 30,
    CrossWorkingCapital: 13,
  },
  {
    month: 'aug',
    NetWorkingCapital: 42,
    CrossWorkingCapital: 37,
  },
  {
    month: 'sep',
    NetWorkingCapital: 20,
    CrossWorkingCapital: 14,
  },
  {
    month: 'oct',
    NetWorkingCapital: 32,
    CrossWorkingCapital: 31,
  },
  {
    month: 'nov',
    NetWorkingCapital: 27,
    CrossWorkingCapital: 25,
  },
  {
    month: 'dec',
    NetWorkingCapital: 15,
    CrossWorkingCapital: 12,
  },
];

function LineChartExample() {
  return (
    <>
    <h5>Net Working Capital vs Cross Working Capital</h5>
    <LineChart
      width={500}
      height={250}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="NetWorkingCapital"
        name="Net Working Capital"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="CrossWorkingCapital"
        name="Cross Working Capital"
        stroke="yellow"
        activeDot={{ r: 8 }}
      />
    </LineChart>
    </>
  );
}

export default LineChartExample;
