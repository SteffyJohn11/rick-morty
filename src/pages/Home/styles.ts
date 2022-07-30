import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '150vh',
  maxWidth: '90%',
  minHeight: '100vh',
  margin: '0 auto'
}));

export const Image = styled('img')(({ theme }) => ({
  width: '60vh',
  objectFit: 'cover',
  alignSelf: 'center',
  marginBottom: '2rem'
}));

export const ListWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: '3rem'
}));