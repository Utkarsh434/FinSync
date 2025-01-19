'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data={
        datasets:[
            {
                label:'Banks',
                data:[1250,2500,3750],
                backgroundColor:['#3e95cd','#8e5ea2','#3cba9f'],
                hoverBackgroundColor:['#3e95cd','#8e5ea2','#3cba9f'] 
            }
        ],
        labels:["bank1","bank2","bank3"]
    }
  return  <Doughnut 
    data={data} 
    options={{
        cutout:'60%',
        plugins:{
            legend:{
                display:false
            }
        }
    }}
  />
  
}

export default DoughnutChart
