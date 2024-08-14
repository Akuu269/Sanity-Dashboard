// material-ui
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <MainCard title="Sample Card">
      <Typography variant="body2">To-Do List : </Typography>
          <Typography variant="body2">1. Add common filter Today , Week & month wise , Default status should be Today . </Typography>
          <Typography variant="body2">2. Add CCT commit List Report before barchart . </Typography>
          <Typography variant="body2">3. Nightly & commit bar chart should be Sanity Specific . like : SF , DNX Sanity .</Typography>
          <Typography variant="body2">4. add DDTS list as well before the line chart .</Typography>
          <Typography variant="body2">4. Need to desgin Incidents & DDTS page completely  .</Typography>
          <Typography variant='body2'>5.Emogi : We need on Front page basis on the RTT, tb’s down, queue time etc.
                                      6. Remove the pipeline chart , not needed 
                                      7. Design the page box properly .  </Typography>
    </MainCard>
  );
}

