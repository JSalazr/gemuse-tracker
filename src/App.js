import React, { useState } from "react";
import moment from "moment";
import MonthPicker from "./Components/MonthPicker";
import ProducePicker from "./Components/ProducePicker";
import { Grid } from "@mui/material";
import ProduceTable from "./Components/ProduceTable";
import { produce } from "./data";
import "./App.css";

const filterProduce = (produceArr, month) => {
  produceArr.sort((a, b) => b.commonality[month] - a.commonality[month]);

  return produceArr.filter(
    (produce) =>
      produce.commonality[month] >=
      (Math.max(...produce.commonality) + Math.min(...produce.commonality)) / 2
  );
};

const App = () => {
  const [month, setMonth] = useState(moment().month());

  return (
    <div className="App">
      {/* <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item size={8}>
          <MonthPicker />
        </Grid>
        <Grid item size={4}>
          <ProducePicker />
        </Grid>
      </Grid> */}
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item size={4}>
          <ProduceTable
            data={filterProduce([...produce], month)}
            month={month}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
