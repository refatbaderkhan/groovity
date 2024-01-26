import React, { useState, useEffect } from 'react';
import { MusicWindowCategoryFilterCombobox } from './MusicWindowCategoryFilterCombobox';
import { spotifyGetSeveralBrowseCategories } from 'api/spotify/spotifyServices';
import MusicWindowCategoryFilterButton from './MusicWindowCategoryFilterButton';

const MusicWindowCategoryFilter = () => {

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleUnselect = (category) => {
    setSelectedCategories(selectedCategories.filter((selectedCategory) => selectedCategory.id !== category.id))
  }

  useEffect(() => {
    spotifyGetSeveralBrowseCategories()
      .then((response) => {
        const sortedCategories = response.categories.items.sort((a, b) => a.name.localeCompare(b.name));
        setCategories(sortedCategories);
      })
  }, []);

  return (
    <div className='genre-filter flex flex-row h-4% w-full pl-10 justify-between'>
      <div className='selected-genres flex flex-row justify-start'>
        {selectedCategories.map((category) => (
          <MusicWindowCategoryFilterButton key={category.id} category={category} handleUnselect={handleUnselect} />
        ))}
      </div>
      <div className='select-genre justify-self-end'>
        <MusicWindowCategoryFilterCombobox categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      </div>
    </div>
  );
}

export default MusicWindowCategoryFilter;
