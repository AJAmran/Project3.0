// import React from 'react';

// const Statistics = () => {
//     return (
//         <div>
//             <h1>this is Statistics</h1>
//         </div>
//     );
// };

// export default Statistics;

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Scatter, Bar } from 'recharts';

const data = [
  {
    name: 'Assignment-1',
    marks: 57,
  },
  {
    name: 'Assignment-2',
    marks: 60,
  
  },
  {
    name: 'Assignment-3',
    marks: 60,
    
  },
  {
    name: 'Assignment-4',
    marks: 60,
    
  },
  {
    name: 'Assignment-5',
    marks: 58,
  },
  {
    name: 'Assignment-6',
    marks: 60,
  },
  {
    name: 'Assignment-7',
    marks: 60,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div className='container mt-5' style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="marks" stroke="#048471" fill="#BDF6ED" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
