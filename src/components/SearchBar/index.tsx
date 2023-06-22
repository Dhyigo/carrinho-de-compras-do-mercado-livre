import { FormEventHandler, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { fetchProducts } from '../../services/api/fetchProducts';
import './style.css';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);
    console.log(products);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
