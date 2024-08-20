import * as React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { saveAs } from 'file-saver';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

// project import
import ComponentSkeleton from './ComponentSkeleton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(defect, director, defectDescription, cctRuns, nightlyRuns, component, status, age, comments) {
  return { defect, director, defectDescription, cctRuns, nightlyRuns, component, status, age, comments };
}

const initialRows = [
  createData('Defect1', 'Director1', 'Description1', 10, 5, 'Component1', 'Open', 2, 'Initial Comment 1'),
  createData('Defect2', 'Director2', 'Description2', 12, 6, 'Component2', 'Closed', 3, 'Initial Comment 2'),
  createData('Defect3', 'Director3', 'Description3', 8, 4, 'Component3', 'In Progress', 1, 'Initial Comment 3'),
  createData('Defect4', 'Director4', 'Description4', 15, 7, 'Component4', 'Open', 4, 'Initial Comment 4'),
  createData('Defect5', 'Director5', 'Description5', 9, 5, 'Component5', 'Closed', 5, 'Initial Comment 5'),
];

export default function ComponentDDTSReport() {
  const [rows, setRows] = useState(initialRows);
  const [dateRange, setDateRange] = useState([dayjs('2022-04-17'), dayjs('2022-04-21')]);

  const handleCommentChange = (index, newComment) => {
    const updatedRows = [...rows];
    updatedRows[index].comments = newComment;
    setRows(updatedRows);
  };

  const handleDownload = () => {
    const csvContent = rows.map(row =>
      `${row.defect},${row.director},${row.defectDescription},${row.cctRuns},${row.nightlyRuns},${row.component},${row.status},${row.age},${row.comments}`
    ).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'DDTS_table_data.csv');
  };

  return (
    <ComponentSkeleton>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'relative', top: '-95px', right: '0' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
          />
        </LocalizationProvider>
        <Button variant="contained" onClick={handleDownload} style={{ marginLeft: '16px' }}>
          Download
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Defect</StyledTableCell>
              <StyledTableCell align="right">Director</StyledTableCell>
              <StyledTableCell align="right">Defect Description</StyledTableCell>
              <StyledTableCell align="right">CCT Impacted Runs</StyledTableCell>
              <StyledTableCell align="right">Nightly Impacted Runs</StyledTableCell>
              <StyledTableCell align="right">Component</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Age(Days)</StyledTableCell>
              <StyledTableCell align="right">Comments</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.defect}>
                <StyledTableCell component="th" scope="row">
                  {row.defect}
                </StyledTableCell>
                <StyledTableCell align="right">{row.director}</StyledTableCell>
                <StyledTableCell align="right">{row.defectDescription}</StyledTableCell>
                <StyledTableCell align="right">{row.cctRuns}</StyledTableCell>
                <StyledTableCell align="right">{row.nightlyRuns}</StyledTableCell>
                <StyledTableCell align="right">{row.component}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">{row.age}</StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
                    value={row.comments}
                    onChange={(e) => handleCommentChange(index, e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ComponentSkeleton>
  );
}
