import { styled } from '@mui/material/styles';

export const DividerWrapper = styled('div')(({ theme }) => ({
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}));



export const Title = styled('h1')(({ theme }) => ({
    fontFamily: "Heebo",
    fontWeight: 700,
    whiteSpace: 'pre',
    fontSize: '5vh',
    color: theme.palette.common.white
}));

export const Divider = styled('div')(({ theme }) => ({
    width: '100%',
    marginLeft: '2vh',
    height: '0.3vh',
    backgroundColor:'#D2E054',
    marginTop:'0.3rem'
}));
