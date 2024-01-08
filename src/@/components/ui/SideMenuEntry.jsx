import React from 'react';

const SideMenuEntry = ({ text, menuToggle, setMenuToggle }) => {

  return (
    <div className='flex flex-row flex-start'>
      {menuToggle === text ? (
        <div className='width 1px bg-[#FFDE5A] rounded-r-lg'>
          &nbsp;
        </div>
      ) : null}
      <div
        className='pb-2 indent-7 cursor-pointer'
        onClick={() => setMenuToggle(text)}
      >
        {text}
      </div>
    </div>
  );
};

export default SideMenuEntry;
