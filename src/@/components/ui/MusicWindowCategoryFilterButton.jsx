import React from 'react';
import { Button } from './button';
import { XCircle } from 'lucide-react';

const MusicWindowCategoryFilterButton = ({ category, handleUnselect }) => {

  return (
    <div key={category.id}>
      <Button
        variant='outline'
        className='h-7 text-[#262626] round-md border-[#656565] border font-normal pr-2 mr-2 cursor-default bg-[#FFDE5A] hover:bg-[#FFDE5A] font-semibold'>
        {category.name}
        <XCircle
          className='ml-3 p-0 h-4 w-4 shrink-0 opacity-70 cursor-pointer hover:opacity-100 text-[#262626] hover:text-[#262626]'
          onClick={() => handleUnselect(category)}
        />
      </Button>
    </div>
  );
}

export default MusicWindowCategoryFilterButton;
