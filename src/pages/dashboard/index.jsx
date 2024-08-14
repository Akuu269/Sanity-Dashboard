// material-ui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import NightlyBarChart from './NightlyBarChart';
import CDETSAreaChart from './CDETSAreaChart';
import PipelineHealth from './PipelineHealth';
import CommitSanityTable from './CommitSanityTable';
import PipelineHealthTable from './PipelineHealthTable';

// assets
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';


// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>

      {/* row 1 */}

      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Sanity Performance Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total CI/CD Pipeline Issues" count="236" percentage={7.8} isLoss color="warning" extra="5" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Commit Failuer " count="250" percentage={70.5} isLoss color="warning" extra="19" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Nightly Failure" count="80" percentage={27.4} isLoss color="warning" extra="13" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total open Bugs" count="78" percentage={27.4}  extra="5" />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}


      {/* <Grid item xs={12} md={7} lg={8}>
        <UniqueVisitorCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Nightly Status</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.secondary">
                Today's Nightly Statistics
              </Typography>
              <Typography variant="h6">Total Pass : 150</Typography>
              <Typography variant="h6">Total Failed : 50</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid> */}



      <Grid item xs={12} md={7} lg={8}>
        <PipelineHealth />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Nightly Status</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" 
              sx={{ color: 'Black', transform: 'translateY(-15px)' }}
              color="text.secondary">
                Today's Status : 
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ color: 'green', transform: 'translateY(-20px)' }}
              >
                Total Pass : 150
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ color: 'red', transform: 'translateY(-25px)' }}
              >
                Total Failed : 50
              </Typography>
            </Stack>
          </Box>
          <NightlyBarChart/>
        </MainCard>
      </Grid>



      {/* row 3 */}

      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Top Issues Impacting Pipeline Health</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <PipelineHealthTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">CDETS Reports</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Open Bugs" />
              <Typography variant="h5">103</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Resolved Bugs" />
              <Typography variant="h5">79</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="New Bugs" />
              <Typography variant="h5">20</Typography>
            </ListItemButton>
          </List>
          <CDETSAreaChart/>
        </MainCard>
      </Grid>

      {/* row 4 */}

      <Grid item xs={12} md={7} lg={8}>
        <CommitSanityTable />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Open Top Sanity Issue</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Incident Id's : 123452344</Typography>} secondary="Today 2:00 AM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    SW Issue : xyz
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    Failed Sanity : 12
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Incident Id's : 2324353</Typography>} secondary="5 August, 1:45 PM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    Scripts Issue : xyz
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    Failed Sanity : 10
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Incident Id's : 242535</Typography>} secondary="7 hours ago" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    Lab Issue : xyz
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    Failed Sanity : 23
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical replay within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
}


