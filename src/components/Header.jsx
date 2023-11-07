import React, { useState } from 'react';

function Header({ author,setSearchPressed }) {
  const [search, setSearch] = React.useState('');
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className='header-container'>
      <div className='header-content'>
        <a href='/' style={{textDecoration : "none"}}><h1 className='header-title'>Quotes</h1></a>
        <form className='search-bar'>
          <input
            type='text'
            value={search}
            placeholder='Search author'
            onChange={handleInputChange}
          />
          <button onClick={(event) => {
            author(event, search)
            setSearchPressed(true);
          }}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
