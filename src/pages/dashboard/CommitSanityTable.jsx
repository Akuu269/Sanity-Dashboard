import { useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// project import
import CommitSanityChart from './CommitSanityChart';

// sales report status
const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'Week'
  },
  {
    value: 'year',
    label: 'Month'
  }
];

// sample table data
const data = [
  {
    Sanity: 'SF',
    PassedCCTs: 80, // Percentage
    FailedCCTs: 15, // Percentage
    AnalysisPending: 5,
    Error: 2,
    Queue: 10,
    Executing: 3,
    TotalTBs: 100,
    TBsAvailable: 80,
    TBsDown: 20
  },
  {
    Sanity: 'DNX',
    PassedCCTs: 75, // Percentage
    FailedCCTs: 20, // Percentage
    AnalysisPending: 4,
    Error: 3,
    Queue: 8,
    Executing: 5,
    TotalTBs: 98,
    TBsAvailable: 78,
    TBsDown: 20
  },
  {
    Sanity: 'Mini-Ap',
    PassedCCTs: 95, // Percentage
    FailedCCTs: 5, // Percentage
    AnalysisPending: 4,
    Error: 3,
    Queue: 8,
    Executing: 5,
    TotalTBs: 100,
    TBsAvailable: 0,
    TBsDown: 10
  },
  {
    Sanity: 'Core-Ap',
    PassedCCTs: 95, // Percentage
    FailedCCTs: 5, // Percentage
    AnalysisPending: 4,
    Error: 3,
    Queue: 8,
    Executing: 5,
    TotalTBs: 100,
    TBsAvailable: 0,
    TBsDown: 10
  },
  {
    Sanity: 'ASR9k-Ap',
    PassedCCTs: 95, // Percentage
    FailedCCTs: 5, // Percentage
    AnalysisPending: 4,
    Error: 3,
    Queue: 8,
    Executing: 5,
    TotalTBs: 100,
    TBsAvailable: 0,
    TBsDown: 10
  }
];

// ==============================|| DEFAULT - SALES REPORT ||============================== //

export default function CommitSanityTable() {
  const [value, setValue] = useState('today');

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between"sx={{ mt: -77.5 }}>
        <Grid item>
          <Typography variant="h5">Commit Sanity Report</Typography>
        </Grid>
        {/* <Grid item>
          <TextField
            id="standard-select-currency"
            size="small"
            select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{ '& .MuiInputBase-input': { py: 0.75, fontSize: '0.875rem' } }}
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid> */}
      </Grid>

      {/* Reduced the margin-top value */}
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Sanity</TableCell>
              <TableCell align="center">Passed CCT's</TableCell>
              <TableCell align="center">Failed CCT's</TableCell>
              <TableCell align="center">Analysis Pending</TableCell>
              <TableCell align="center">Error</TableCell>
              <TableCell align="center">Queue</TableCell>
              <TableCell align="center">Executing</TableCell>
              <TableCell align="center">Total TB's</TableCell>
              <TableCell align="center">TB's Available</TableCell>
              <TableCell align="center">TB's Down</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.Sanity}</TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: 'inline-block',
                      px: 1.5,
                      py: 0.5,
                      backgroundColor: 'green',
                      color: 'white',
                      borderRadius: '4px',
                      fontWeight: 'bold'
                    }}
                  >
                    {row.PassedCCTs}%
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: 'inline-block',
                      px: 1.5,
                      py: 0.5,
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '4px',
                      fontWeight: 'bold'
                    }}
                  >
                    {row.FailedCCTs}%
                  </Box>
                </TableCell>
                <TableCell align="center">{row.AnalysisPending}</TableCell>
                <TableCell align="center">{row.Error}</TableCell>
                <TableCell align="center">{row.Queue}</TableCell>
                <TableCell align="center">{row.Executing}</TableCell>
                <TableCell align="center">{row.TotalTBs}</TableCell>
                <TableCell align="center">{row.TBsAvailable}</TableCell>
                <TableCell align="center">{row.TBsDown}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CommitSanityChart />
    </>
  );
}
