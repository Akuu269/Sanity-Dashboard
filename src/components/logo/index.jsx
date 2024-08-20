// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// // material-ui
// import { ButtonBase } from '@mui/material';
// import Stack from '@mui/material/Stack';

// // project import
// import Logo from './LogoMain';
// import config from 'config';

// // ==============================|| MAIN LOGO ||============================== //

// const LogoSection = ({ sx, to }) => {
//   return (
//     <ButtonBase
//       disableRipple
//       component={Link}
//       to={!to ? config.defaultPath : to}
//       sx={{ ...sx, paddingLeft: '30px' }} // Adjust padding to move logo right
//     >
//       <Stack direction="row" spacing={1} alignItems="center">
//         <Logo sx={{ width: '250px', height: 'auto' }} /> {/* Increase logo size */}
//       </Stack>
//     </ButtonBase>
//   );
// };

// LogoSection.propTypes = {
//   sx: PropTypes.object,
//   to: PropTypes.string
// };

// export default LogoSection;



import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

// project import
import Logo from './LogoMain';
import config from 'config';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  return (
    <ButtonBase
      disableRipple
      component={Link}
      to={!to ? config.defaultPath : to}
      sx={{ ...sx, paddingLeft: '10px' }} // Adjust padding to move logo right
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo sx={{ width: '200px', height: 'auto' }} /> {/* Increase logo size */}
        <Typography variant="h4" sx={{ paddingLeft: '5px' , color: 'Red' }}>
          XR-Sanity
        </Typography>
      </Stack>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
