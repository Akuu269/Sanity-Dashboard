import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Box, Button, FormControl, Select, InputLabel,
  Switch, FormControlLabel, Typography, TablePagination, TableSortLabel, MenuItem
} from '@mui/material';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.grey[200],
}));

const StyledTableRow = styled(TableRow)(({ theme, row }) => ({
  backgroundColor: row.priority === 'High' ? 'rgba(255, 0, 0, 0.1)' : row.priority === 'Medium' ? 'rgba(255, 255, 0, 0.1)' : 'inherit',
}));

const initialRows = [
  { id: 1, incidentNo: 'INC001', age: 3, headline: 'Issue with X', priority: 'High', state: 'Open', assigneeGroup: 'SF Sanity', assigneeEngineer: 'Engineer A', runsImpacted: 30 },
  { id: 2, incidentNo: 'INC002', age: 5, headline: 'Issue with Y', priority: 'Low', state: 'Resolved', assigneeGroup: 'DNX', assigneeEngineer: 'Engineer B', runsImpacted: 20 },
  { id: 3, incidentNo: 'INC003', age: 4, headline: 'Issue with Z', priority: 'Medium', state: 'Open', assigneeGroup: 'ASR9K', assigneeEngineer: 'Engineer C', runsImpacted: 40 },
  { id: 4, incidentNo: 'INC004', age: 2, headline: 'Issue with A', priority: 'Medium', state: 'Open', assigneeGroup: 'Optical', assigneeEngineer: 'Engineer D', runsImpacted: 20 },
  // Add more rows here
];

export default function IncidentsTable() {
  const [rows, setRows] = useState(initialRows);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('age'); // Default sorting column
  const [filterCategory, setFilterCategory] = useState('');
  const [filterEngineer, setFilterEngineer] = useState('');
  const [showOpen, setShowOpen] = useState(true);
  const [showResolved, setShowResolved] = useState(true);
  const [assignedToMe, setAssignedToMe] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // States for temporary filter values
  const [tempFilterCategory, setTempFilterCategory] = useState('');
  const [tempFilterEngineer, setTempFilterEngineer] = useState('');
  const [tempShowOpen, setTempShowOpen] = useState(true);
  const [tempShowResolved, setTempShowResolved] = useState(true);

  // Handle filter changes
  const handleFilterChange = () => {
    let filteredRows = [...initialRows];

    if (tempFilterCategory) {
      filteredRows = filteredRows.filter(row => row.assigneeGroup === tempFilterCategory);
    }

    if (tempFilterEngineer) {
      filteredRows = filteredRows.filter(row => row.assigneeEngineer === tempFilterEngineer);
    }

    if (!tempShowOpen) {
      filteredRows = filteredRows.filter(row => row.state !== 'Open');
    }

    if (!tempShowResolved) {
      filteredRows = filteredRows.filter(row => row.state !== 'Resolved');
    }

    if (assignedToMe) {
      filteredRows = filteredRows.filter(row => row.assigneeEngineer === 'Engineer A'); // Replace with actual logic to get the current engineer
    }

    setRows(filteredRows);
  };

  // Handle sort requests
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);

    // Apply sorting logic
    const sortedRows = [...rows].sort((a, b) => {
      if (property === 'age') {
        return isAsc ? a.age - b.age : b.age - a.age;
      } else if (property === 'priority') {
        const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
        return isAsc ? priorityOrder[a.priority] - priorityOrder[b.priority] : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else if (property === 'runsImpacted') {
        return isAsc ? a.runsImpacted - b.runsImpacted : b.runsImpacted - a.runsImpacted;
      }
      return 0;
    });

    setRows(sortedRows);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const downloadCSV = () => {
    const headers = ['Incident No', 'Age', 'Headline', 'Priority', 'State', 'Assignee Group', 'Assignee Engineer', 'Runs Impacted'];
    const csvRows = [
      headers.join(','), // join the headers with commas
      ...rows.map(row =>
        [row.incidentNo, row.age, row.headline, row.priority, row.state, row.assigneeGroup, row.assigneeEngineer, row.runsImpacted].join(',')
      ),
    ].join('\n');

    // Create a new Blob object using the text
    const blob = new Blob([csvRows], { type: 'text/csv' });

    // Create a link element
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'incidents_report.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Incidents Table
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={tempFilterCategory}
            onChange={(e) => setTempFilterCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="SF Sanity">SF Sanity</MenuItem>
            <MenuItem value="DNX">DNX</MenuItem>
            <MenuItem value="ASR9K">ASR9K</MenuItem>
            <MenuItem value="Optical">Optical</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Engineer</InputLabel>
          <Select
            value={tempFilterEngineer}
            onChange={(e) => setTempFilterEngineer(e.target.value)}
            label="Engineer"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Engineer A">Engineer A</MenuItem>
            <MenuItem value="Engineer B">Engineer B</MenuItem>
            <MenuItem value="Engineer C">Engineer C</MenuItem>
            <MenuItem value="Engineer D">Engineer D</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={<Switch checked={tempShowOpen} onChange={(e) => setTempShowOpen(e.target.checked)} />}
          label="Show Open"
        />
        <FormControlLabel
          control={<Switch checked={tempShowResolved} onChange={(e) => setTempShowResolved(e.target.checked)} />}
          label="Show Resolved"
        />
        <Button variant="contained" onClick={handleFilterChange}>
          Apply Filters
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Incident No</StyledTableCell>
              <StyledTableCell>
                <TableSortLabel
                  active={orderBy === 'age'}
                  direction={orderBy === 'age' ? order : 'asc'}
                  onClick={() => handleRequestSort('age')}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      color: 'black !important',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  Age
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>Headline</StyledTableCell>
              <StyledTableCell>
                <TableSortLabel
                  active={orderBy === 'priority'}
                  direction={orderBy === 'priority' ? order : 'asc'}
                  onClick={() => handleRequestSort('priority')}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      color: 'black !important',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  Priority
                </TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>State</StyledTableCell>
              <StyledTableCell>Assignee Group</StyledTableCell>
              <StyledTableCell>Assignee Engineer</StyledTableCell>
              <StyledTableCell>
                <TableSortLabel
                  active={orderBy === 'runsImpacted'}
                  direction={orderBy === 'runsImpacted' ? order : 'asc'}
                  onClick={() => handleRequestSort('runsImpacted')}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      color: 'black !important',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  Runs Impacted
                </TableSortLabel>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <StyledTableRow key={row.id} row={row}>
                <TableCell>{row.incidentNo}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.headline}</TableCell>
                <TableCell>{row.priority}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.assigneeGroup}</TableCell>
                <TableCell>{row.assigneeEngineer}</TableCell>
                <TableCell>{row.runsImpacted}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" onClick={downloadCSV}>Download Data</Button>
        </Box>
    </Box>
  );
}
