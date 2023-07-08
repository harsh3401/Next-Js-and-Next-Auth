"use client";
import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
const MainChart = () => {
    const upto=6;
    let data=[];
    for(let i=0;i<upto;i++){
        data.push("Week "+(i+1));
    }

  return (
    <div className=" h-[15rem] border-2 rounded-xl bg-white pl-10 pt-4 flex-col max-w-50">
      <div className='flex-col'>
        <div className="font-montserrat text-lg font-bold">Activities</div>
     
        <div className="flex  text-xs font-thin text-secondarytext items-center"><p className="mr-1">May - June 2021</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
  <path d="M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z" fill="#858585"/>
</svg></div>
</div>
<div className="mt-2" style={{height:"70%",width:"95%"}}>
<Line
options={{
  maintainAspectRatio:false,
    plugins:{legend: {
        display: false,
        align:"end",
        labels: {
            usePointStyle: true,
          },
    },},
    elements: {
        point:{
            radius: 0
        }
    },
    scales: {

     x: {
       grid: {
         display: false
       }
       ,
     },

     y: {
       grid: {
         display: true
       }
     }
   }
}} 

       data={{
       // x-axis label `values
       labels: data,
       
       datasets: [
          {
              label: "Guest",
              // y-axis data plotting values
              data: [100, 300, 150, 250, 180,200,250,],
              fill: false,
              borderWidth:4,
              borderColor:"#9BDD7C",
              backgroundColor:"#9BDD7C",
             
              tension:0.4,
              
            },
            {
                label: "User",
                // y-axis data plotting values
                data: [200, 300, 200, 300, 220,200,],
                fill: false,
                borderWidth:4,
                borderColor:"#E9A0A0",
                backgroundColor:"#E9A0A0",
                tension:0.4,
                
              },
       
            
          ],
          
        }}
      />
      </div>
</div>
  )
}

export default MainChart