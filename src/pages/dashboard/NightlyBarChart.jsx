import { useState } from 'react';
import { useTheme, Box, Grid, Typography, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

const barChartOptions = {
  chart: {
    type: 'bar',
    height: 365,
    toolbar: { show: false }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4
    }
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: { show: true },
  grid: { show: true },
  legend: { show: true, position: 'top' }
};

export default function NightlyBarChart() {
  const theme = useTheme();
  const [selectedLabels, setSelectedLabels] = useState(['SF']);

  // Data for each label
  const dataMap = {
    SF: {
      passed: [45, 50, 60, 55, 40, 50, 60],
      failed: [10, 15, 12, 8, 10, 20, 15]
    },
    DNX: {
      passed: [35, 40, 45, 50, 30, 40, 55],
      failed: [5, 10, 8, 12, 9, 15, 10]
    },
    MiniAp: {
      passed: [25, 35, 40, 45, 25, 30, 40],
      failed: [10, 5, 7, 10, 8, 12, 15]
    }
  };

  const [options, setOptions] = useState(barChartOptions);

  // Function to update selected labels
  const handleCheckboxChange = (event) => {
    const label = event.target.name;
    setSelectedLabels((prev) =>
      event.target.checked ? [...prev, label] : prev.filter((item) => item !== label)
    );
  };

  // Create series data based on selected checkboxes
  const series = selectedLabels.map((label) => ({
    name: `${label} Passed`,
    data: dataMap[label].passed,
    color: theme.palette.success.main
  })).concat(
    selectedLabels.map((label) => ({
      name: `${label} Failed`,
      data: dataMap[label].failed,
      color: theme.palette.error.main
    }))
  );

  return (
    <Box>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
        <Grid item xs={12}>
          <FormGroup row sx={{ display: 'flex', justifyContent: 'center' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLabels.includes('SF')}
                  onChange={handleCheckboxChange}
                  name="SF"
                />
              }
              label="SF"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLabels.includes('DNX')}
                  onChange={handleCheckboxChange}
                  name="DNX"
                />
              }
              label="DNX"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedLabels.includes('MiniAp')}
                  onChange={handleCheckboxChange}
                  name="MiniAp"
                />
              }
              label="MiniAp"
            />
          </FormGroup>
        </Grid>
      </Grid>

      {/* <Typography variant="h6" mb={2} align="center">
        Showing Data For: {selectedLabels.join(', ')}
      </Typography> */}

      <Box id="chart" sx={{ bgcolor: 'transparent' }}>
        <ReactApexChart options={options} series={series} type="bar" height={365} />
      </Box>
    </Box>
  );
}
