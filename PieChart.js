import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = () => {
  return (
    <div>
    <Pie data = {{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
          {
            label: 'Sales in Millions',
            data: [12, 7, 18, 4, 43, 31],
            backgroundColor: [
              'purple',
              'blue',
              'red',
              'yellow',
              'orange',
              'cyan',
            ],
          },
        ],
      }}
      height = {400}
      width = {600}
      options = {{
        maintainAspectRatio: false,
      }}
    />
    </div>
 )
}

export default PieChart
