import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ComponentColor() {
  const incidentData = [
    { id: 0, value: 30, label: 'Open Incidents' },
    { id: 1, value: 45, label: 'Closed Incidents' },
    { id: 2, value: 25, label: 'In-Progress Incidents' },
  ];

  const totalIncidents = incidentData.reduce((acc, incident) => acc + incident.value, 0);

  const incidents = [
    {
      id: 'INC001',
      title: 'Lab Issue',
      runsImpacted: 30,
      status: 'Open',
      age: '2 days',
      description: 'Network failure due to unexpected load.',
      assigneeGroup: 'SF Team',
      assigneeEngineer: 'John Doe',
      priority: 'High',
      sanityName: 'SF Sanity',
      consistency: 'Consistent',
    },{
      id: 'INC002',
      title: 'Server Issue',
      runsImpacted: 30,
      status: 'Open',
      age: '2 days',
      description: 'Network failure due to unexpected load.',
      assigneeGroup: 'SF Team',
      assigneeEngineer: 'John Doe',
      priority: 'High',
      sanityName: 'SF Sanity',
      consistency: 'Consistent',
    },
    {
      id: 'INC003',
      title: 'Cafy Issue Failure',
      runsImpacted: 30,
      status: 'Open',
      age: '2 days',
      description: 'Network failure due to unexpected load.',
      assigneeGroup: 'SF Team',
      assigneeEngineer: 'John Doe',
      priority: 'High',
      sanityName: 'SF Sanity',
      consistency: 'Consistent',
    },{
      id: 'INC004',
      title: 'Testbed issue',
      runsImpacted: 30,
      status: 'Open',
      age: '2 days',
      description: 'Network failure due to unexpected load.',
      assigneeGroup: 'DNX Team',
      assigneeEngineer: 'John Doe',
      priority: 'High',
      sanityName: 'DNX Sanity',
      consistency: 'Consistent',
    },{
      id: 'INC005',
      title: 'Ixia issue',
      runsImpacted: 30,
      status: 'Open',
      age: '2 days',
      description: 'Network failure due to unexpected load.',
      assigneeGroup: 'ASR9k Team',
      assigneeEngineer: 'John Doe',
      priority: 'High',
      sanityName: 'ASR9K Sanity',
      consistency: 'Consistent',
    },{
      id: 'INC006',
      title: 'Network Failure',
      runsImpacted: 30,
      status: 'Open',
      age: '2 days',
      description: 'Network failure due to unexpected load.',
      assigneeGroup: 'SF Team',
      assigneeEngineer: 'John Doe',
      priority: 'High',
      sanityName: 'SF Sanity',
      consistency: 'Consistent',
    },
  ];

  const [openIncidentModal, setOpenIncidentModal] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [newIncident, setNewIncident] = useState({
    headline: '',
    description: '',
    assigneeGroup: '',
    assigneeEngineer: '',
    priority: '',
    sanityName: '',
    consistency: '',
  });

  const handleOpenIncidentModal = (incident) => {
    setSelectedIncident(incident);
    setOpenIncidentModal(true);
  };

  const handleCloseIncidentModal = () => {
    setOpenIncidentModal(false);
    setSelectedIncident(null);
  };

  const handleOpenCreateModal = () => setOpenCreateModal(true);

  const handleCloseCreateModal = () => setOpenCreateModal(false);

  const handleCreateIncident = () => {
    console.log('Incident created:', newIncident);
    handleCloseCreateModal();
  };

  const filteredIncidents = incidents.filter(
    (incident) => incident.runsImpacted > 25
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '100vh',
        padding: 4,
      }}
    >
      <Card
        sx={{
          padding: 3,
          maxWidth: 750,
          width: '100%',
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
          Incident Summary :
        </Typography>
        <Typography variant="h6" color="green" gutterBottom>
          Total Incidents: {totalIncidents}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <PieChart
            series={[
              {
                data: incidentData,
              },
            ]}
            width={700}
            height={300}
          />
        </Box>
      </Card>

      <TableContainer component={Paper} sx={{ maxWidth: 650, marginLeft: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Top Incidents </Typography>
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

      {/* Incident Details Modal */}
      <Modal
        open={openIncidentModal}
        onClose={handleCloseIncidentModal}
        aria-labelledby="incident-details-title"
        aria-describedby="incident-details-description"
      >
        <Box sx={style}>
          {selectedIncident && (
            <>
              <Typography id="incident-details-title" variant="h6" component="h2">
                {selectedIncident.title}
              </Typography>
              <Typography id="incident-details-description" sx={{ mt: 2 }}>
                <strong>Description:</strong> {selectedIncident.description}
              </Typography>
              <Typography><strong>Assignee Group:</strong> {selectedIncident.assigneeGroup}</Typography>
              <Typography><strong>Assignee Engineer:</strong> {selectedIncident.assigneeEngineer}</Typography>
              <Typography><strong>Priority:</strong> {selectedIncident.priority}</Typography>
              <Typography><strong>Sanity Name:</strong> {selectedIncident.sanityName}</Typography>
              <Typography><strong>Consistency:</strong> {selectedIncident.consistency}</Typography>
            </>
          )}
        </Box>
      </Modal>

      {/* Create Incident Modal */}
      <Modal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        aria-labelledby="create-incident-title"
      >
        <Box sx={style}>
          <Typography id="create-incident-title" variant="h6" component="h2">
            Create New Incident
          </Typography>
          <TextField
            required
            fullWidth
            margin="normal"
            label="Headline"
            value={newIncident.headline}
            onChange={(e) => setNewIncident({ ...newIncident, headline: e.target.value })}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Description"
            value={newIncident.description}
            onChange={(e) => setNewIncident({ ...newIncident, description: e.target.value })}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Assignee Group"
            value={newIncident.assigneeGroup}
            onChange={(e) => setNewIncident({ ...newIncident, assigneeGroup: e.target.value })}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Assignee Engineer"
            value={newIncident.assigneeEngineer}
            onChange={(e) => setNewIncident({ ...newIncident, assigneeEngineer: e.target.value })}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Priority"
            value={newIncident.priority}
            onChange={(e) => setNewIncident({ ...newIncident, priority: e.target.value })}
            select
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </TextField>
          <TextField
            required
            fullWidth
            margin="normal"
            label="Sanity Name"
            value={newIncident.sanityName}
            onChange={(e) => setNewIncident({ ...newIncident, sanityName: e.target.value })}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Intermittent/Consistent"
            value={newIncident.consistency}
            onChange={(e) => setNewIncident({ ...newIncident, consistency: e.target.value })}
            select
          >
            <MenuItem value="Intermittent">Intermittent</MenuItem>
            <MenuItem value="Consistent">Consistent</MenuItem>
          </TextField>
          <Button variant="contained" color="primary" onClick={handleCreateIncident} sx={{ mt: 2 }}>
            Create Incident
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
