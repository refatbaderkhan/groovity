import React, { useState } from 'react';
import { Input } from './input';
import { spotifySearch } from 'api/spotify/spotifyServices';

const NavBarSearch = ({setSearch}) => {

  return (
    <div>
      <Input
        type='text'
        placeholder='Search'
        className=' ml-20 text-[#BFBFBF]'
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default NavBarSearch;
