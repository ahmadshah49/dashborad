"use client"
import React, { Component } from "react";
import { useState } from "react";
import Image from 'next/image'
import Card from './(components)/sidebar/card/card'
import { AiOutlineTeam, AiOutlineUser, AiFillShopping, AiFillAccountBook } from "react-icons/ai"
import Chart from "react-apexcharts";
export default function Home() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep","oct"]
      }
    },
    series: [
      {
        name: "Premium Visitors",
        data: [100, 400, 45, 220, 982, 780, 210, 91]
      },
      {
        name: "Visitors",
        data: [5000, 3500, 4700, 11550, 25549, 65660, 99970, 94541]
      }, {
        name: "Sales",
        data: [5000, 45000, 65444, 35044, 89997, 9799, 56356, 89898]
      }
    ]
  })
  const [state2, setState2] = useState(
    {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep","oct"]
        }
      },
      series: [
        {
          name: "Products",
          data: [20, 30, 45, 10, 8, 10, 21, 81]
        },
        
      ]
    }
  )
  const [state3, setState3] = useState( {
    options: {
      chart: {
        id: "basic-bar"
      }
     
    },
    series: [
  44,55,41,17,15
    ]
  })
  return (
    <div className='w-[80%] absolute right-0   bg-red-100 '>
      <div className='flex w-full justify-center gap-12 '>
        <Card icon={<AiOutlineTeam />} title="2828" desc=" Total Premium Visitors" />
        <Card icon={<AiOutlineUser />} title="270.4k" desc=" Total Visitors" />
        <Card icon={<AiFillShopping />} title="25" desc=" Total Products" />
        <Card icon={<AiFillAccountBook />} title="396.5k" desc=" Total Sales" />
      </div>
      <div className='charts w-full flex justify-between p-8 mt-10 gap-12'>
        <div className="left flex justify-center p-20 bg-white w-[60%] shadow">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="550"
            height="400"
          />
        </div>
        <div className="right bg-white p-5 w-[40%] shadow">
        <Chart
            options={state2.options}
            series={state2.series}
            type="area"
            width="300"
            height="400"
            // className="w-[22rem]"
          />
        </div>
      </div>
      <div className="circle m-auto bg-white p-5 w-[90%] flex  justify-center item-center shadow">
        <Chart
            options={state3.options}
            series={state3.series}
            type="donut"
            width="500"
            height="500"
            // className="w-[22rem]"
          />
        </div>
    </div>
  )
}
