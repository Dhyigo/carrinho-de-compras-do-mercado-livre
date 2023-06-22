import { FormEventHandler, useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { fetchProducts } from '../../services/api/fetchProducts';
import { AppContext } from '../../context/AppContext';
import './style.css';

export const SearchBar = () => {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setSearchValue('');
    setLoading(false);
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
