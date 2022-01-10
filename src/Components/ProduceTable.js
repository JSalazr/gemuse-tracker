import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RemoveIcon from "@mui/icons-material/Remove";
import ProduceGraph from "./ProduceGraph";

function Row({ produce, month }) {
  const [prevMonth, setPrevMonth] = useState(
    produce.commonality[month - 1 - 12 * Math.floor((month - 1) / 12)]
  );
  const [nextMonth, setNextMonth] = useState(
    produce.commonality[(month + 1) % 12]
  );
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {produce.name}
        </TableCell>
        <TableCell align="right">
          {prevMonth < produce.commonality[month] ? (
            <ArrowDropDownIcon />
          ) : prevMonth > produce.commonality[month] ? (
            <ArrowDropUpIcon />
          ) : (
            <RemoveIcon />
          )}
        </TableCell>
        <TableCell align="right">
          {nextMonth < produce.commonality[month] ? (
            <ArrowDropDownIcon />
          ) : nextMonth > produce.commonality[month] ? (
            <ArrowDropUpIcon />
          ) : (
            <RemoveIcon />
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <ProduceGraph data={produce} />
             </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const ProduceTable = ({ data, month }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Produce</TableCell>
            <TableCell align="right">Prev. Month</TableCell>
            <TableCell align="right">Next Month</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((produce) => (
            <Row key={produce.name} produce={produce} month={month} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProduceTable;
