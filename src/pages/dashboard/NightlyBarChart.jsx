// // import { useEffect, useState } from 'react';

// // // material-ui
// // import { useTheme } from '@mui/material/styles';
// // import Box from '@mui/material/Box';

// // // third-party
// // import ReactApexChart from 'react-apexcharts';

// // // chart options
// // const barChartOptions = {
// //   chart: {
// //     type: 'bar',
// //     height: 365,
// //     toolbar: {
// //       show: false
// //     }
// //   },
// //   plotOptions: {
// //     bar: {
// //       columnWidth: '45%',
// //       borderRadius: 4
// //     }
// //   },
// //   dataLabels: {
// //     enabled: false
// //   },
// //   xaxis: {
// //     categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
// //     axisBorder: {
// //       show: false
// //     },
// //     axisTicks: {
// //       show: false
// //     }
// //   },
// //   yaxis: {
// //     show: false
// //   },
// //   grid: {
// //     show: false
// //   }
// // };

// // // ==============================|| MONTHLY BAR CHART ||============================== //

// // export default function MonthlyBarChart() {
// //   const theme = useTheme();

// //   const { primary, secondary } = theme.palette.text;
// //   const info = theme.palette.info.light;

// //   const [series] = useState([
// //     {
// //       data: [80, 95, 70, 42, 65, 55, 78]
// //     }
// //   ]);

// //   const [options, setOptions] = useState(barChartOptions);

// //   useEffect(() => {
// //     setOptions((prevState) => ({
// //       ...prevState,
// //       colors: [info],
// //       xaxis: {
// //         labels: {
// //           style: {
// //             colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
// //           }
// //         }
// //       }
// //     }));
// //   }, [primary, info, secondary]);

// //   return (
// //     <Box id="chart" sx={{ bgcolor: 'transparent' }}>
// //       <ReactApexChart options={options} series={series} type="bar" height={365} />
// //     </Box>
// //   );
// // }


// import { useEffect, useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ReactApexChart from 'react-apexcharts';

// const barChartOptions = {
//   chart: {
//     type: 'bar',
//     height: 365,
//     toolbar: {
//       show: false
//     }
//   },
//   plotOptions: {
//     bar: {
//       columnWidth: '45%',
//       borderRadius: 4
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   xaxis: {
//     categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'], // Days of the week
//     axisBorder: {
//       show: false
//     },
//     axisTicks: {
//       show: false
//     }
//   },
//   yaxis: {
//     show: true,
//     title: {
//       text: "Count"
//     }
//   },
//   grid: {
//     show: true
//   },
//   legend: {
//     position: 'top'
//   }
// };

// export default function MonthlyBarChart() {
//   const theme = useTheme();

//   const { primary, secondary } = theme.palette.text;
//   const info = theme.palette.info.light;
//   const success = theme.palette.success.main;
//   const error = theme.palette.error.main;

//   const [series] = useState([
//     {
//       name: 'SF Sanity',
//       data: [40, 42, 43, 45, 44, 41, 43],
//       color: success
//     },
//     // {
//     //   name: 'SF ',
//     //   data: [10, 11, 12, 14, 13, 15, 14],
//     //   color: error
//     // },
//     {
//       name: 'DNX Passed',
//       data: [35, 37, 39, 40, 38, 36, 37],
//       color: success
//     },
//     // {
//     //   name: 'DNX Failed',
//     //   data: [8, 9, 10, 11, 10, 12, 11],
//     //   color: error
//     // },
//     {
//       name: 'Miniap Passed',
//       data: [25, 28, 29, 30, 28, 27, 29],
//       color: success
//     },
//     // {
//     //   name: 'Miniap Failed',
//     //   data: [7, 8, 7, 6, 8, 7, 8],
//     //   color: error
//     // }
//   ]);

//   const [options, setOptions] = useState(barChartOptions);

//   useEffect(() => {
//     setOptions((prevState) => ({
//       ...prevState,
//       colors: series.map(serie => serie.color), // Using colors from series
//       xaxis: {
//         labels: {
//           style: {
//             colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
//           }
//         }
//       }
//     }));
//   }, [primary, info, secondary, success, error]);

//   return (
//     <Box id="chart" sx={{ bgcolor: 'transparent' }}>
//       <ReactApexChart options={options} series={series} type="bar" height={365} />
//     </Box>
//   );
// }



// import { useState } from 'react';
// import { useTheme, Button, Box, Grid, Typography } from '@mui/material';
// import ReactApexChart from 'react-apexcharts';

// const barChartOptions = {
//   chart: {
//     type: 'bar',
//     height: 365,
//     toolbar: { show: false }
//   },
//   plotOptions: {
//     bar: {
//       columnWidth: '45%',
//       borderRadius: 4
//     }
//   },
//   dataLabels: { enabled: false },
//   xaxis: {
//     categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     axisBorder: { show: false },
//     axisTicks: { show: false }
//   },
//   yaxis: { show: true },
//   grid: { show: true },
//   legend: { show: true, position: 'top' }
// };

// export default function InteractiveBarChart() {
//   const theme = useTheme();
//   const [selectedLabel, setSelectedLabel] = useState('SF');

//   // Data for each label
//   const dataMap = {
//     SF: {
//       passed: [45, 50, 60, 55, 40, 50, 60],
//       failed: [10, 15, 12, 8, 10, 20, 15]
//     },
//     DNX: {
//       passed: [35, 40, 45, 50, 30, 40, 55],
//       failed: [5, 10, 8, 12, 9, 15, 10]
//     },
//     MiniAp: {
//       passed: [25, 35, 40, 45, 25, 30, 40],
//       failed: [10, 5, 7, 10, 8, 12, 15]
//     }
//   };

//   const [options, setOptions] = useState(barChartOptions);

//   // Update the series data based on the selected label
//   const series = [
//     {
//       name: 'Passed',
//       data: dataMap[selectedLabel].passed,
//       color: theme.palette.success.main
//     },
//     {
//       name: 'Failed',
//       data: dataMap[selectedLabel].failed,
//       color: theme.palette.error.main
//     }
//   ];

//   return (
//     <Box>
//       <Grid container spacing={2} mb={2}>
//         <Grid item>
//           <Button
//             variant={selectedLabel === 'SF' ? 'contained' : 'outlined'}
//             onClick={() => setSelectedLabel('SF')}
//           >
//             SF
//           </Button>
//         </Grid>
//         <Grid item>
//           <Button
//             variant={selectedLabel === 'DNX' ? 'contained' : 'outlined'}
//             onClick={() => setSelectedLabel('DNX')}
//           >
//             DNX
//           </Button>
//         </Grid>
//         <Grid item>
//           <Button
//             variant={selectedLabel === 'MiniAp' ? 'contained' : 'outlined'}
//             onClick={() => setSelectedLabel('MiniAp')}
//           >
//             Mini Ap
//           </Button>
//         </Grid>
//       </Grid>

//       <Typography variant="h6" mb={2}>
//         Showing data for: {selectedLabel}
//       </Typography>

//       <Box id="chart" sx={{ bgcolor: 'transparent' }}>
//         <ReactApexChart options={options} series={series} type="bar" height={365} />
//       </Box>
//     </Box>
//   );
// }




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

      <Typography variant="h6" mb={2} align="center">
        Showing Data For: {selectedLabels.join(', ')}
      </Typography>

      <Box id="chart" sx={{ bgcolor: 'transparent' }}>
        <ReactApexChart options={options} series={series} type="bar" height={365} />
      </Box>
    </Box>
  );
}
