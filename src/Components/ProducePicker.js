import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { produce } from "../data";

const ProducePicker = ({selectedProduce, setSelectedProduce}) => {
  const handleChange = (event) => {
    setSelectedProduce(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Produce</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedProduce}
          label="Produce"
          onChange={handleChange}
        >
          {produce.map((prod) => (
            <MenuItem value={prod.name}>{prod.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProducePicker;
