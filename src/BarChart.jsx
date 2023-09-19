import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        Year: "Current",
        AccountReceivable: 25000,
        AccountPayable: 13000,
      },
  {
    Year: "2022-2023",
    AccountReceivable: 20000,
    AccountPayable: 2000,
  },
  {
    Year: "2021-2022",
    AccountReceivable: 10000,
    AccountPayable: 2000,
  },
  {
    Year: "2020-2021",
    AccountReceivable: 8000,
    AccountPayable: 2000,
  },
  {
    Year: "2019-2020",
    AccountReceivable: 4000,
    AccountPayable: 1000,
  },
]

function BarChartExample() {
  return (
    <>
    <h4>Total Account Receivable and Payable Aging</h4>
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="AccountReceivable" fill="blue" name="Accounts Receivable" />
      <Bar dataKey="AccountPayable" fill="red" name="Accounts Payable" />
    </BarChart>
    </>
  );
}

export default BarChartExample;
