import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
  {
    days: 28,
    
  },
  {
    days: 31,

  },
  

];

const COLORS = ['#0088FE', '#00C49F']; // You can customize colors here

function PieChart3() {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="days"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default PieChart3;
