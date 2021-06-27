import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
  return (
    <div>
    <Bar data = {{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
          {
            label: 'Sales in Millions',
            data: [12, 9, 15, 8, 21, 3],
            backgroundColor: [
              'purple',
            ],
            borderColor: [
                'red'
            ],
            borderWidth: 2,
          },
          {
            label: "Quantity of Units Sold",
            data: [20, 50, 30, 50, 60, 30],
            backgroundColor: [
              'blue'
            ],
            borderColor: [
              'black'
            ],
            borderWidth: 2,
          }
        ],
      }}
            height = {400}
            width = {600}
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

export default BarChart
