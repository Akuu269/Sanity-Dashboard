// import PropTypes from 'prop-types';
// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// // material-ui
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import Divider from '@mui/material/Divider';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';

// // third party
// import * as Yup from 'yup';
// import { Formik } from 'formik';

// // project import
// import AnimateButton from 'components/@extended/AnimateButton';

// // assets
// import EyeOutlined from '@ant-design/icons/EyeOutlined';
// import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
// import FirebaseSocial from './FirebaseSocial';

// // ============================|| JWT - LOGIN ||============================ //

// export default function AuthLogin({ isDemo = false }) {
//   const [checked, setChecked] = React.useState(false);

//   const [showPassword, setShowPassword] = React.useState(false);
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <>
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//           submit: null
//         }}
//         validationSchema={Yup.object().shape({
//           email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
//           password: Yup.string().max(255).required('Password is required')
//         })}
//       >
//         {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
//           <form noValidate onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <Stack spacing={1}>
//                   <InputLabel htmlFor="email-login">Email Address</InputLabel>
//                   <OutlinedInput
//                     id="email-login"
//                     type="email"
//                     value={values.email}
//                     name="email"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     placeholder="Enter email address"
//                     fullWidth
//                     error={Boolean(touched.email && errors.email)}
//                   />
//                 </Stack>
//                 {touched.email && errors.email && (
//                   <FormHelperText error id="standard-weight-helper-text-email-login">
//                     {errors.email}
//                   </FormHelperText>
//                 )}
//               </Grid>
//               <Grid item xs={12}>
//                 <Stack spacing={1}>
//                   <InputLabel htmlFor="password-login">Password</InputLabel>
//                   <OutlinedInput
//                     fullWidth
//                     error={Boolean(touched.password && errors.password)}
//                     id="-password-login"
//                     type={showPassword ? 'text' : 'password'}
//                     value={values.password}
//                     name="password"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                           edge="end"
//                           color="secondary"
//                         >
//                           {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                     placeholder="Enter password"
//                   />
//                 </Stack>
//                 {touched.password && errors.password && (
//                   <FormHelperText error id="standard-weight-helper-text-password-login">
//                     {errors.password}
//                   </FormHelperText>
//                 )}
//               </Grid>

//               <Grid item xs={12} sx={{ mt: -1 }}>
//                 <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={checked}
//                         onChange={(event) => setChecked(event.target.checked)}
//                         name="checked"
//                         color="primary"
//                         size="small"
//                       />
//                     }
//                     label={<Typography variant="h6">Keep me sign in</Typography>}
//                   />
//                   <Link variant="h6" component={RouterLink} color="text.primary">
//                     Forgot Password?
//                   </Link>
//                 </Stack>
//               </Grid>
//               {errors.submit && (
//                 <Grid item xs={12}>
//                   <FormHelperText error>{errors.submit}</FormHelperText>
//                 </Grid>
//               )}
//               <Grid item xs={12}>
//                 <AnimateButton>
//                   <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
//                     Login
//                   </Button>
//                 </AnimateButton>
//               </Grid>
//               <Grid item xs={12}>
//                 <Divider>
//                   <Typography variant="caption"> Login with</Typography>
//                 </Divider>
//               </Grid>
//               <Grid item xs={12}>
//                 <FirebaseSocial />
//               </Grid>
//             </Grid>
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// }

// AuthLogin.propTypes = { isDemo: PropTypes.bool };





// import React from 'react';
// import PropTypes from 'prop-types';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const rows = [
//   {
//     defect: 'Defect 1',
//     director: 'Director 1',
//     description: 'Description 1',
//     cctRuns: 5,
//     nightlyRuns: 2,
//     component: 'Component 1',
//     status: 'Open',
//     age: '2 days',
//     comments: 'Needs review',
//   },
//   // Add more rows as needed
// ];

// export default function DefectTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Defect</TableCell>
//             <TableCell>Director</TableCell>
//             <TableCell>Defect Description</TableCell>
//             <TableCell>CCT Impacted Runs</TableCell>
//             <TableCell>Nightly Impacted Runs</TableCell>
//             <TableCell>Component</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Age</TableCell>
//             <TableCell>Comments</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell>{row.defect}</TableCell>
//               <TableCell>{row.director}</TableCell>
//               <TableCell>{row.description}</TableCell>
//               <TableCell>{row.cctRuns}</TableCell>
//               <TableCell>{row.nightlyRuns}</TableCell>
//               <TableCell>{row.component}</TableCell>
//               <TableCell>{row.status}</TableCell>
//               <TableCell>{row.age}</TableCell>
//               <TableCell>{row.comments}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// DefectTable.propTypes = {
//   rows: PropTypes.arrayOf(
//     PropTypes.shape({
//       defect: PropTypes.string.isRequired,
//       director: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       cctRuns: PropTypes.number.isRequired,
//       nightlyRuns: PropTypes.number.isRequired,
//       component: PropTypes.string.isRequired,
//       status: PropTypes.string.isRequired,
//       age: PropTypes.string.isRequired,
//       comments: PropTypes.string.isRequired,
//     })
//   ),
// };


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function CustomizedTables() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(defect, director, defectDescription, cctRuns, nightlyRuns, component, status, age, comments) {
  return { defect, director, defectDescription, cctRuns, nightlyRuns, component, status, age, comments };
}

const rows = [
  createData('Defect1', 'Director1', 'Description1', 10, 5, 'Component1', 'Open', 2, 'Comments1'),
  createData('Defect2', 'Director2', 'Description2', 12, 6, 'Component2', 'Closed', 3, 'Comments2'),
  createData('Defect3', 'Director3', 'Description3', 8, 4, 'Component3', 'In Progress', 1, 'Comments3'),
  createData('Defect4', 'Director4', 'Description4', 15, 7, 'Component4', 'Open', 4, 'Comments4'),
  createData('Defect5', 'Director5', 'Description5', 9, 5, 'Component5', 'Closed', 5, 'Comments5'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Defect</StyledTableCell>
            <StyledTableCell align="right">Director</StyledTableCell>
            <StyledTableCell align="right">Defect Description</StyledTableCell>
            <StyledTableCell align="right">CCT Impacted Runs</StyledTableCell>
            <StyledTableCell align="right">Nightly Impacted Runs</StyledTableCell>
            <StyledTableCell align="right">Component</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Age(Days)</StyledTableCell>
            <StyledTableCell align="right">Comments</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.defect}>
              <StyledTableCell component="th" scope="row">
                {row.defect}
              </StyledTableCell>
              <StyledTableCell align="right">{row.director}</StyledTableCell>
              <StyledTableCell align="right">{row.defectDescription}</StyledTableCell>
              <StyledTableCell align="right">{row.cctRuns}</StyledTableCell>
              <StyledTableCell align="right">{row.nightlyRuns}</StyledTableCell>
              <StyledTableCell align="right">{row.component}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">{row.comments}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
