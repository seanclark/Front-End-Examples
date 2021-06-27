import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
    <Line data = {{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
          {
            label: 'Monthly Returns',
            data: [12, 24, 18, 10, 9, 5],
            backgroundColor: [
              'red'
            ],
            borderColor: [
              'red',
            ],
            borderWidth: 2,
            pointRadius: 5,
          },
          {
            label: "Monthly Exchanges",
            data: [11, 12, 6, 8, 5, 10],
            backgroundColor: [
              'magenta',
            ],
            borderColor: [
              'magenta',
            ],
            borderWidth: 2,
            pointRadius: 5,
          },
          {
            label: "Monthly BuyBacks",
            data: [3, 2, 5, 6, 2, 9],
            backgroundColor: [
              'blue',
            ],
            borderColor: [
              'blue',
            ],
            borderWidth: 2,
            pointRadius: 5,
          },
        ],
      }}
      height = {400}
      width = {400}
      options = {{
        maintainAspectRatio: false,
        layout: {
            padding: 50,
          }
      }}
    />
    </div>
 )
}

export default LineChart
