// import { useEffect, useState } from 'react';

// // material-ui
// import { useTheme } from '@mui/material/styles';

// // third-party
// import ReactApexChart from 'react-apexcharts';

// // chart options
// const areaChartOptions = {
//   chart: {
//     height: 340,
//     type: 'line',
//     toolbar: {
//       show: false
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth',
//     width: 1.5
//   },
//   grid: {
//     strokeDashArray: 4
//   },
//   xaxis: {
//     type: 'datetime',
//     categories: [
//       '2018-05-19T00:00:00.000Z',
//       '2018-06-19T00:00:00.000Z',
//       '2018-07-19T01:30:00.000Z',
//       '2018-08-19T02:30:00.000Z',
//       '2018-09-19T03:30:00.000Z',
//       '2018-10-19T04:30:00.000Z',
//       '2018-11-19T05:30:00.000Z',
//       '2018-12-19T06:30:00.000Z'
//     ],
//     labels: {
//       format: 'MMM'
//     },
//     axisBorder: {
//       show: false
//     },
//     axisTicks: {
//       show: false
//     }
//   },
//   yaxis: {
//     show: false
//   },
//   tooltip: {
//     x: {
//       format: 'MM'
//     }
//   }
// };

// // ==============================|| REPORT AREA CHART ||============================== //

// export default function ReportAreaChart() {
//   const theme = useTheme();

//   const { primary, secondary } = theme.palette.text;
//   const line = theme.palette.divider;

//   const [options, setOptions] = useState(areaChartOptions);

//   useEffect(() => {
//     setOptions((prevState) => ({
//       ...prevState,
//       colors: [theme.palette.warning.main],
//       xaxis: {
//         labels: {
//           style: {
//             colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary]
//           }
//         }
//       },
//       grid: {
//         borderColor: line
//       },
//       legend: {
//         labels: {
//           colors: 'grey.500'
//         }
//       }
//     }));
//   }, [primary, secondary, line, theme]);

//   const [series] = useState([
//     {
//       name: 'Series 1',
//       data: [58, 115, 28, 83, 63, 75, 35, 55]
//     }
//   ]);

//   return <ReactApexChart options={options} series={series} type="line" height={340} />;
// }


// import { useEffect, useState } from 'react';

// // material-ui
// import { useTheme } from '@mui/material/styles';

// // third-party
// import ReactApexChart from 'react-apexcharts';

// // chart options
// const areaChartOptions = {
//   chart: {
//     height: 340,
//     type: 'line',
//     toolbar: {
//       show: false
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth',
//     width: 2
//   },
//   grid: {
//     strokeDashArray: 4
//   },
//   xaxis: {
//     type: 'datetime',
//     labels: {
//       format: 'MMM yyyy' // Display month and year
//     },
//     axisBorder: {
//       show: false
//     },
//     axisTicks: {
//       show: false
//     }
//   },
//   yaxis: {
//     title: {
//       text: 'Count'
//     }
//   },
//   tooltip: {
//     x: {
//       format: 'MMM yyyy' // Match format for tooltips
//     }
//   }
// };

// // ==============================|| REPORT AREA CHART ||============================== //

// export default function ReportAreaChart() {
//   const theme = useTheme();

//   const { primary, secondary } = theme.palette.text;
//   const line = theme.palette.divider;

//   const [options, setOptions] = useState(areaChartOptions);

//   useEffect(() => {
//     setOptions((prevState) => ({
//       ...prevState,
//       colors: [theme.palette.warning.main, theme.palette.success.main],
//       xaxis: {
//         labels: {
//           style: {
//             colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
//           }
//         }
//       },
//       grid: {
//         borderColor: line
//       },
//       legend: {
//         labels: {
//           colors: 'grey.500'
//         }
//       }
//     }));
//   }, [primary, secondary, line, theme]);

//   const [series] = useState([
//     {
//       name: 'Open Bugs',
//       data: [
//         { x: '2024-01-01T00:00:00.000Z', y: 120 },
//         { x: '2024-02-01T00:00:00.000Z', y: 100 },
//         { x: '2024-03-01T00:00:00.000Z', y: 13 },
//         { x: '2024-04-01T00:00:00.000Z', y: 170 },
//         { x: '2024-05-01T00:00:00.000Z', y: 160 }
//       ]
//     },
//     {
//       name: 'Resolved Bugs',
//       data: [
//         { x: '2024-01-01T00:00:00.000Z', y: 180 },
//         { x: '2024-02-01T00:00:00.000Z', y: 190 },
//         { x: '2024-03-01T00:00:00.000Z', y: 10 },
//         { x: '2024-04-01T00:00:00.000Z', y: 12 },
//         { x: '2024-05-01T00:00:00.000Z', y: 110 }
//       ]
//     }
//   ]);

//   return <ReactApexChart options={options} series={series} type="line" height={340} />;
// }


// import { useEffect, useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import ReactApexChart from 'react-apexcharts';
// import { Button, Menu, MenuItem, Box, Typography } from '@mui/material';
// import dayjs from 'dayjs';

// // Function to generate data based on selected range
// const generateData = (range) => {
//   const now = dayjs();
//   let dates = [];
//   let openBugsData = [];
//   let closedBugsData = [];
  
//   switch (range) {
//     case 'day':
//       for (let i = 6; i >= 0; i--) {
//         const day = now.subtract(i, 'day');
//         dates.push(day.startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
//         openBugsData.push({ x: day.startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 50) + 10 });
//         closedBugsData.push({ x: day.startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 30) + 5 });
//       }
//       break;
//     case 'week':
//       for (let i = 4; i >= 0; i--) {
//         const week = now.subtract(i, 'week');
//         dates.push(week.startOf('week').format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
//         openBugsData.push({ x: week.startOf('week').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 100) + 20 });
//         closedBugsData.push({ x: week.startOf('week').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 70) + 10 });
//       }
//       break;
//     case 'month':
//       for (let i = 5; i >= 0; i--) {
//         const month = now.subtract(i, 'month');
//         dates.push(month.startOf('month').format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
//         openBugsData.push({ x: month.startOf('month').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 150) + 50 });
//         closedBugsData.push({ x: month.startOf('month').format('YYYY-MM-DDTHH:mm:ss.SSSZ'), y: Math.floor(Math.random() * 100) + 20 });
//       }
//       break;
//     default:
//       break;
//   }

//   return { dates, openBugsData, closedBugsData };
// };

// // chart options
// const areaChartOptions = {
//   chart: {
//     height: 340,
//     type: 'line',
//     toolbar: {
//       show: false
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth',
//     width: 2
//   },
//   grid: {
//     strokeDashArray: 4
//   },
//   xaxis: {
//     type: 'datetime',
//     labels: {
//       format: 'MMM yyyy' // Default format
//     },
//     axisBorder: {
//       show: false
//     },
//     axisTicks: {
//       show: false
//     }
//   },
//   yaxis: {
//     title: {
//       text: 'Count'
//     }
//   },
//   tooltip: {
//     x: {
//       format: 'MMM yyyy' // Default format
//     }
//   }
// };

// // ==============================|| REPORT AREA CHART ||============================== //

// export default function ReportAreaChart() {
//   const theme = useTheme();
//   const { primary, secondary } = theme.palette.text;
//   const line = theme.palette.divider;

//   const [options, setOptions] = useState(areaChartOptions);
//   const [series, setSeries] = useState([]);
//   const [range, setRange] = useState('month'); // Default to month view
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = (selectedRange) => {
//     setAnchorEl(null);
//     if (selectedRange) {
//       setRange(selectedRange);
//     }
//   };

//   useEffect(() => {
//     const { dates, openBugsData, closedBugsData } = generateData(range);
    
//     setOptions((prevState) => ({
//       ...prevState,
//       colors: [theme.palette.warning.main, theme.palette.success.main],
//       xaxis: {
//         categories: dates,
//         labels: {
//           format: range === 'month' ? 'MMM yyyy' : range === 'week' ? 'dd MMM' : 'dd MMM', // Adjust format based on range
//           style: {
//             colors: Array(dates.length).fill(secondary)
//           }
//         }
//       },
//       grid: {
//         borderColor: line
//       },
//       legend: {
//         labels: {
//           colors: 'grey.500'
//         }
//       }
//     }));

//     setSeries([
//       {
//         name: 'Open Bugs',
//         data: openBugsData
//       },
//       {
//         name: 'Closed Bugs',
//         data: closedBugsData
//       }
//     ]);
//   }, [primary, secondary, line, theme, range]);

//   return (
//     <Box>
//       <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//         <Typography variant="h5" sx={{ mb: 1, mr: 2 }}>Bug Statistics:</Typography>
//         <Button
//           aria-controls="range-menu"
//           aria-haspopup="true"
//           onClick={handleClick}
//           variant="contained"
//         >
//           {range.charAt(0).toUpperCase() + range.slice(1)}
//         </Button>
//         <Menu
//           id="range-menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={() => handleClose(null)}
//         >
//           <MenuItem onClick={() => handleClose('day')}>Day</MenuItem>
//           <MenuItem onClick={() => handleClose('week')}>Week</MenuItem>
//           <MenuItem onClick={() => handleClose('month')}>Month</MenuItem>
//         </Menu>
//       </Box>
//       <ReactApexChart options={options} series={series} type="line" height={340} />
//     </Box>
//   );
// }




import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';
import { Button, Menu, MenuItem, Box, Typography } from '@mui/material';
import dayjs from 'dayjs';

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
      format: 'MMM yyyy' // Default format
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
      format: 'MMM yyyy' // Default format
    }
  }
};

// ==============================|| REPORT AREA CHART ||============================== //

export default function CDETSAreaChart() {
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);
  const [series, setSeries] = useState([]);
  const [range, setRange] = useState('month'); // Default to month view
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
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ mb: 1, mr: 2 }}>Bug Statistics</Typography>
        <Button
          aria-controls="range-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="contained"
          sx={{ backgroundColor: 'white', color: theme.palette.text.primary, border: `1px solid ${theme.palette.divider}` }}
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
      <ReactApexChart options={options} series={series} type="line" height={340} />
    </Box>
  );
}
