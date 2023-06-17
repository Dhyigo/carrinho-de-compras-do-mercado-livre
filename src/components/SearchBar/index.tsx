import { BsSearch } from 'react-icons/bs';
import './style.css';
import { useState } from 'react';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input 
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({target}) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>


  );
};
