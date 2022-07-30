import {  createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
export const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
  },
  typography: {
    fontFamily: [
        'Heebo',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    
},
});