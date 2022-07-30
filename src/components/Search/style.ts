import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100% !important',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '100%',
    },
    height: '8vh'
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.common.white,
    '& .MuiInputBase-root': {
        width: '100%',
        height: '100%',
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            height: '100%',
            '&:focus': {
                width: '100%',
                height: '100%',
            },
        },
    },

}));