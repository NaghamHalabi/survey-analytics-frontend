import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className="search-container">
      <div className="survey-header">Survey Analytics</div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={handleInputChange}
        className='search-input'
      />
      <Button
        text="search"
        sx={{'backgroundColor':'#27374D', 'color': '#DDE6ED', 'padding':'10px','margin':'10px', 'height': '50px'}}
        onClick={handleSearch}
        >
        Search

      </Button>
    </div>
  );
};

export default SearchBar;
