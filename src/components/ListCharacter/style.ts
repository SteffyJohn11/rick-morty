import { styled } from '@mui/material/styles';

export const ListWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, [col] 28vh)',
  columnGap: '4vh',
  rowGap: '4vh',
  justifyContent: 'space-around',
  justifyItems: 'center',
  alignItems: 'flex-end',
  paddingTop: '6vh',
  overflowX: 'hidden',
  marginBottom: '2rem'
}));



