import * as React from 'react';
import Button from '@mui/material/Button';
import moment from 'moment';

const ClearButton = ({setMonth, setSelectedProduce}) => {
  const clearFilters = () => {
    setMonth(moment().month());
    setSelectedProduce("");
  }
  return (
    <Button variant="contained" onClick={clearFilters}>Clear</Button>
  );
}

export default ClearButton;