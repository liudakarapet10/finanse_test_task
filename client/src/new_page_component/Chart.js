import React from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Chart = (props) => {
  const tickers = props.tickers;
  const time = props.time;
  const price = props.price
  console.log(tickers)
    
  return <div>
     <LineChart width={660} height={300} data={tickers}>
    <Line type="monotone" dataKey={price} stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey={time} />
    <YAxis />
  </LineChart>
  </div>
}

export default Chart;