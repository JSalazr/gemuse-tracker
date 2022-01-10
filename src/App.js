import React, { useState } from "react";
import moment from "moment";
import MonthPicker from "./Components/MonthPicker";
import ProducePicker from "./Components/ProducePicker";
import { Grid } from "@mui/material";
import ProduceTable from "./Components/ProduceTable";
import { produce } from "./data";
import "./App.css";
import ClearButton from "./Components/ClearButton";

const filterProduce = (produceArr, month, selectedProduce) => {
  produceArr.sort((a, b) => b.commonality[month] - a.commonality[month]);

  return produceArr.filter((produce) => {
    if (selectedProduce !== "") {
      return produce.name === selectedProduce;
    }
    return (
      produce.commonality[month] >=
      (Math.max(...produce.commonality) + Math.min(...produce.commonality)) / 2
    );
  });
};

const App = () => {
  const [month, setMonth] = useState(moment().month());
  const [selectedProduce, setSelectedProduce] = useState("");

  return (
    <div className="App">
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item size={8}>
          <MonthPicker month={month} setMonth={setMonth} disable={selectedProduce !== ""}/>
        </Grid>
        <Grid item size={4}>
          <ProducePicker
            selectedProduce={selectedProduce}
            setSelectedProduce={setSelectedProduce}
          />
        </Grid>
        <Grid item size={4}>
          <ClearButton
            setMonth={setMonth}
            setSelectedProduce={setSelectedProduce}
          />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item size={4}>
          <ProduceTable
            data={filterProduce([...produce], month, selectedProduce)}
            month={month}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
