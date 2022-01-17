import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ProduceGraph = ({ data, month }) => {
  const state = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        backgroundColor: Array.from({length: 12}, (_, i) => i == month ? "rgba(140,207,78,1)" : "rgba(255,168,30,1)"),
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: data.commonality,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Commonality",
            fontSize: 20,
          },
          plugins: {
            legend: {
              display: false
            },
          },
          scales: {
            y: {
              max: 4,
              min: 0,
              ticks: {
                stepSize: 1,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ProduceGraph;
