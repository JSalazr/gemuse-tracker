import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const MonthPicker = () => {
  return (
    <ButtonGroup variant="contained" orientation="vertical" aria-label="outlined primary button group">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>Jan</Button>
        <Button>Feb</Button>
        <Button>Mär</Button>
        <Button>Apr</Button>
        <Button>Mai</Button>
        <Button>Jun</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>Jul</Button>
        <Button>Aug</Button>
        <Button>Sep</Button>
        <Button>Okt</Button>
        <Button>Nov</Button>
        <Button>Dez</Button>
      </ButtonGroup>
    </ButtonGroup>
  );
};

export default MonthPicker;
