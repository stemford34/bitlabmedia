import React from "react";
import ApexChart from "react-apexcharts";

import "./Chart.scss";

const Chart = ({ options, series, name }) => {
  return (
    <div className="chart">
      <div className="chart__title">{name}</div>
      <ApexChart options={options} series={series} type="line" />
    </div>
  );
};

export default Chart;
