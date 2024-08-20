import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const columnChartOptions = {
  chart: {
    type: 'bar',
    height: 430,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 8,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
  },
  yaxis: {
    title: {
      text: ''
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter(val) {
        return `${val}`;  // Simple number without $ and thousands
      }
    }
  },
  legend: {
    show: false
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false
        }
      }
    }
  ]
};

const initialSeries = [
  {
    name: 'SF Failed',
    data: [10, 12, 8, 11, 13, 9, 7]
  },
  {
    name: 'SF Passed',
    data: [30, 32, 28, 31, 33, 29, 27]
  },
  {
    name: 'DNX Failed',
    data: [20, 15, 18, 14, 17, 19, 21]
  },
  {
    name: 'DNX Passed',
    data: [50, 55, 52, 48, 54, 56, 53]
  },
  {
    name: 'Miniap Failed',
    data: [15, 17, 14, 16, 19, 13, 12]
  },
  {
    name: 'Miniap Passed',
    data: [40, 45, 42, 44, 46, 43, 41]
  }
];

// ==============================|| SALES COLUMN CHART ||============================== //

export default function CommitSanityChart() {
  const theme = useTheme();

  const [legend, setLegend] = useState({
    sf: true,
    dnx: true,
    miniap: true
  });

  const { sf, dnx, miniap } = legend;

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const warning = theme.palette.warning.main;
  const primaryMain = theme.palette.primary.main;
  const successDark = theme.palette.success.dark;

  const [series, setSeries] = useState(initialSeries);

  const handleLegendChange = (event) => {
    setLegend({ ...legend, [event.target.name]: event.target.checked });
  };

  const xsDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [options, setOptions] = useState(columnChartOptions);

  useEffect(() => {
    let updatedSeries = [];

    if (sf) {
      updatedSeries = updatedSeries.concat([
        {
          name: 'SF Failed',
          data: [10, 12, 8, 11, 13, 9, 7]
        },
        {
          name: 'SF Passed',
          data: [30, 32, 28, 31, 33, 29, 27]
        }
      ]);
    }
    if (dnx) {
      updatedSeries = updatedSeries.concat([
        {
          name: 'DNX Failed',
          data: [20, 15, 18, 14, 17, 19, 21]
        },
        {
          name: 'DNX Passed',
          data: [50, 55, 52, 48, 54, 56, 53]
        }
      ]);
    }
    if (miniap) {
      updatedSeries = updatedSeries.concat([
        {
          name: 'Miniap Failed',
          data: [15, 17, 14, 16, 19, 13, 12]
        },
        {
          name: 'Miniap Passed',
          data: [40, 45, 42, 44, 46, 43, 41]
        }
      ]);
    }

    setSeries(updatedSeries);
  }, [sf, dnx, miniap]);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [warning, primaryMain, successDark],
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      plotOptions: {
        bar: {
          columnWidth: xsDown ? '60%' : '30%'
        }
      }
    }));
  }, [primary, secondary, line, warning, primaryMain, successDark, xsDown]);

  return (
    <MainCard sx={{ mt: 6 }} content={false}>
      <Box sx={{ p: 2.5, pb: 0 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack spacing={2.5}>
            {/* Today's Status Box */}
            <Box sx={{ 
              // bgcolor: primaryMain, 
              color: 'Black', 
              // p: 1, 
              // borderRadius: 1, 
              // mb: 1, 
              // textAlign: 'center' 
            }}>
              <Typography variant="h6">
                Today's Status : 
              </Typography>
            </Box>
            {/* Total Passed Box */}
            <Box sx={{ 
              bgcolor: successDark, 
              color: 'white', 
              p: 0.5, 
              borderRadius: 0.5, 
              mb: 1, 
              textAlign: 'center' 
            }}>
              <Typography variant="h6">
                Total Passed: {series.filter(s => s.name.includes('Passed')).reduce((acc, s) => acc + s.data.reduce((a, b) => a + b, 0), 0)}
              </Typography>
            </Box>
            {/* Total Failed Box */}
            <Box sx={{ 
              bgcolor: warning, 
              color: 'white', 
              p: 0.5, 
              borderRadius: 0.5, 
              textAlign: 'center' 
            }}>
              <Typography variant="h6">
                Total Failed: {series.filter(s => s.name.includes('Failed')).reduce((acc, s) => acc + s.data.reduce((a, b) => a + b, 0), 0)}
              </Typography>
            </Box>
          </Stack>
          <FormControl component="fieldset">
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox color="warning" checked={sf} onChange={handleLegendChange} name="sf" />}
                label="SF"
              />
              <FormControlLabel
                control={<Checkbox color="warning" checked={dnx} onChange={handleLegendChange} name="dnx" />}
                label="DNX"
              />
              <FormControlLabel
                control={<Checkbox color="warning" checked={miniap} onChange={handleLegendChange} name="miniap" />}
                label="Miniap"
              />
            </FormGroup>
          </FormControl>
        </Stack>
        <Box id="chart" sx={{ bgcolor: 'transparent' }}>
          <ReactApexChart options={options} series={series} type="bar" height={360} />
        </Box>
      </Box>
    </MainCard>
  );
}