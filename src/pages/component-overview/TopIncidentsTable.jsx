// TopIncidentsTable.jsx

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // Import Box

const TopIncidentsTable = ({ incidents, handleOpenIncidentModal, handleOpenCreateModal }) => {
  const filteredIncidents = incidents.filter(incident => incident.runsImpacted > 25);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 850, marginLeft: 0 , marginRight : 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Top Incidents </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenCreateModal}>
          Create New Incident
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Incident ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Runs Impacted</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredIncidents.slice(0, 10).map((incident) => (
            <TableRow key={incident.id} onClick={() => handleOpenIncidentModal(incident)} style={{ cursor: 'pointer' }}>
              <TableCell>{incident.id}</TableCell>
              <TableCell>{incident.title}</TableCell>
              <TableCell>{incident.runsImpacted}</TableCell>
              <TableCell>{incident.status}</TableCell>
              <TableCell>{incident.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopIncidentsTable;
