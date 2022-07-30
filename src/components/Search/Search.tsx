import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchIconWrapper, Search, StyledInputBase } from './style';

export default function SearchComponent(props: any) {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon style={{ color: 'white' }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search characters"
          inputProps={{ 'aria-label': 'search' }}
          style={{ width: "100%", height: "100%" }}
          onChange={(e) => props.onSearch(e.target.value)}
        />
      </Search>
    </>
  )
}