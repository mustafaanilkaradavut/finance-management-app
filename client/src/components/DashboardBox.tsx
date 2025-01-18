import { Box } from '@mui/material';
import { styled } from '@mui/system';

const DashboardBox = styled(Box)(({ theme }) => ({
   backgroundColor: theme.palette.background.light,
   borderRadius: '1rem',
   boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   alignItems: 'center',
   minHeight: '250px', 
   height: '100%',
   flexGrow: 1,
   padding: '1rem',
}));

export default DashboardBox;
