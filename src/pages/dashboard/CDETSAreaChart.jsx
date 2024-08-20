import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';
import { Button, Menu, MenuItem, Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Function to generate data based on selected range
const generateData = (range) => {
  const now = dayjs();
  let dates = [];
  let openBugsData = [];
  let closedBugsData = [];

  switch (range) {
    case 'day':
      for (let i = 6; i >= 0; i--) {
        const day = now.subtract(i, 'day');
        dates.push(day.startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
        openBugsData.push({ x: day.startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 50) + 10 });
        closedBugsData.push({ x: day.startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 30) + 5 });
      }
      break;
    case 'week':
      for (let i = 6; i >= 0; i--) {
        const week = now.subtract(i, 'week');
        const startOfWeek = week.startOf('week');
        dates.push(startOfWeek.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
        openBugsData.push({ x: startOfWeek.format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 100) + 20 });
        closedBugsData.push({ x: startOfWeek.format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 70) + 10 });
      }
      break;
    case 'month':
      for (let i = 5; i >= 0; i--) {
        const month = now.subtract(i, 'month');
        dates.push(month.startOf('month').format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
        openBugsData.push({ x: month.startOf('month').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 150) + 50 });
        closedBugsData.push({ x: month.startOf('month').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 100) + 20 });
      }
      break;
    default:
      break;
  }

  return { dates, openBugsData, closedBugsData };
};

// Extracted BugStatisticsButton component
export function BugStatisticsButton({ range, setRange }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selectedRange) => {
    setAnchorEl(null);
    if (selectedRange) {
      setRange(selectedRange);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <Typography variant="h5" sx={{ mb: 1, mr: 2 }}>Bug Statistics</Typography> */}
      <Button
        aria-controls="range-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        endIcon={<ArrowDropDownIcon />}  // Adding the arrow icon to the right
        sx={{
          backgroundColor: 'white',
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: 'none',
            borderColor: theme.palette.primary.main,
          },
          '& .MuiButton-endIcon': {
            marginLeft: 'auto',
          },
          borderBottom: `2px solid ${theme.palette.primary.main}`, // Blue bottom border
        }}
      >
        {range.charAt(0).toUpperCase() + range.slice(1)}
      </Button>
      <Menu
        id="range-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
      >
        <MenuItem onClick={() => handleClose('day')}>Today</MenuItem>
        <MenuItem onClick={() => handleClose('week')}>Week</MenuItem>
        <MenuItem onClick={() => handleClose('month')}>Month</MenuItem>
      </Menu>
    </Box>
  );
}

// chart options
const areaChartOptions = {
  chart: {
    height: 340,
    type: 'line',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 4
  },
  xaxis: {
    type: 'datetime',
    labels: {
      format: 'MMM dd' // Default format
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    title: {
      text: 'Count'
    }
  },
  tooltip: {
    x: {
      format: 'MMM dd' // Default format
    }
  }
};

// ==============================|| REPORT AREA CHART ||============================== //

export default function CDETSAreaChart({range}) {
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;
  

  const [options, setOptions] = useState(areaChartOptions);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const { dates, openBugsData, closedBugsData } = generateData(range);

    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.warning.main, theme.palette.success.main],
      xaxis: {
        categories: dates,
        labels: {
          format: range === 'month' ? 'MMM yyyy' : 'MMM dd', // Adjust format based on range
          style: {
            colors: Array(dates.length).fill(secondary)
          }
        }
      },
      grid: {
        borderColor: line
      },
      legend: {
        labels: {
          colors: 'grey.500'
        }
      }
    }));

    setSeries([
      {
        name: 'Open Bugs',
        data: openBugsData
      },
      {
        name: 'Closed Bugs',
        data: closedBugsData
      }
    ]);
  }, [primary, secondary, line, theme, range]);

  return (
    <Box>
      
      <ReactApexChart options={options} series={series} type="line" height={340} />
    </Box>
  );
}
