import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        month: 'Jan',
        profit: 13,
        loss: 10,
        margin: 5
      },
      {
        month: 'Feb',
        profit: 17,
        loss: 14,
        margin:  7,
      },
      {
        month: 'Mar',
        profit: 25,
        loss: 10,
        margin: 6 ,
      },
      {
        month: 'Apr',
        profit: 18,
        loss: 16,
        margin: 8
      },
      {
        month: 'May',
        profit: 20,
        loss: 18,
        margin: 9.5
      },
      {
        month: 'Jun',
        profit: 20,
        loss: 16,
        margin: 9.5
      },
      {
        month: 'Jul',
        profit: 22,
        loss: 16,
        margin: 10 ,
      },
      {
        month: 'Aug',
        profit: 23,
        loss: 10,
        margin: 7,
      },
      {
        month: 'Sep',
        profit: 24,
        loss: 16,
        margin: 12,

      },
      {
        month: 'Oct',
        profit: 26,
        loss: 16,
        margin: 14,
      },
      {
        month: 'Nov',
        profit: 28,
        loss: 16,
        margin: 15,
      },
      {
        month: 'Dec',
        profit: 30,
        loss: 16,
        margin: 14
      },

    ];
  


function StackedBarChartExample() {
  return (
    <>
    <h4>Profit Loss Summary</h4>
    <BarChart
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
      <Bar dataKey="profit" stackId="a" fill="blue" name='' />
      <Bar dataKey="loss" stackId="a" fill="yellow" name="" />
      <Bar dataKey="margin" stackId="a" fill="green" name="" />
    </BarChart>
    </>
  );
}

export default StackedBarChartExample;
