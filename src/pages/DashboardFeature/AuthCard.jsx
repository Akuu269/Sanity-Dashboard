// import PropTypes from 'prop-types';

// // material-ui
// import Box from '@mui/material/Box';

// // project import
// import MainCard from 'components/MainCard';

// // ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

// export default function AuthCard({ children, ...other }) {
//   return (
//     <MainCard
//       sx={{ maxWidth: { xs: 50000, lg: 50075 }, margin: { xs: 4, md: 5 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}
//       content={false}
//       {...other}
//       border={false}
//       boxShadow
//       shadow={(theme) => theme.customShadows.z1}
//     >
//       <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
//     </MainCard>
//   );
// }

// AuthCard.propTypes = { children: PropTypes.node, other: PropTypes.any };


import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MainCard from 'components/MainCard';

export default function AuthCard({ children, ...other }) {
  return (
    <MainCard
      sx={{
        height: '100vh', // Full height of the viewport
        width: '100vw',  // Full width of the viewport
        margin: 0,       // Remove any margins
        display: 'flex',
        flexDirection: 'column', // Use column layout
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items at the start of the flex container
        '& > *': { flexGrow: 1, width: '100%' }
      }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={(theme) => theme.customShadows.z1}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 }, width: '100%' }}>{children}</Box>
    </MainCard>
  );
}

AuthCard.propTypes = {
  children: PropTypes.node,
  other: PropTypes.any
};