import React, { useState, useEffect } from "react";
import {Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import axios from "axios";

const BcChart = () => {
  const [chartData, setChartData] = useState({});
  const [startDate, setStartDate] = useState(new Date("2021-08-01"));
  const [endDate, setEndDate] = useState(new Date("2021-08-10"));

  const chart = () => {
    let bitVal = [];
    let cYear = [];
    var formattedStartDate = format(startDate, "yyyy-MM-dd");
    var formattedToDate = format(endDate, "yyyy-MM-dd");

    axios
      .post("http://127.0.0.1:8000/api/data",{},{
        params: {
          "form_date":formattedStartDate,
          "to_date":formattedToDate
          
        }
      })
      .then(res => {
        console.log(res.data);
        for (const dataObj of res.data.values) {
          bitVal.push(parseFloat(dataObj));
        }
        for (const dataObj of res.data.dates) {
          console.log(dataObj);
          cYear.push(dataObj);
        }
        setChartData({
          labels: cYear,
          datasets: [
            {
              label: "level of thiccness",
              data: bitVal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(bitVal, cYear);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>BitCoin Variance</h1>
      <div>
      <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />     
       <button id="apply-dates" onClick={chart} >
      <i className="fa fa-check-circle"></i>
Render </button></div>
         <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "BitCoin Variations", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  unit: "day",

                  gridLines: {
                    display: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default BcChart;
