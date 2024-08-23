import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IncidentsTable from './IncidentsTable'; // Import the IncidentsTable component
import TopIncidentsTable from './TopIncidentsTable'; // Import TopIncidentsTable

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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 1,
      }}
    >
      {/* Container for Top Incidents Table and Incident Summary */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        {/* Top Incidents Table */}
        <TopIncidentsTable
          incidents={incidents}
          handleOpenIncidentModal={handleOpenIncidentModal}
          handleOpenCreateModal={handleOpenCreateModal}
        />

        {/* Incident Summary */}
        <Card
          sx={{
            padding: 2,
            maxWidth: 500,
            width: '100%',
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
            Incident Summary
          </Typography>
          <Typography variant="h6" color="green" gutterBottom>
            Total Incidents: {totalIncidents}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <PieChart
              series={[
                {
                  data: incidentData,
                },
              ]}
              width={600}
              height={300}
            />
          </Box>
        </Card>
      </Box>

      {/* Incidents Table Component */}
      <IncidentsTable />

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
            multiline
            rows={4}
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
          />
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
            label="Consistency"
            value={newIncident.consistency}
            onChange={(e) => setNewIncident({ ...newIncident, consistency: e.target.value })}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateIncident}
            >
              Create Incident
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
