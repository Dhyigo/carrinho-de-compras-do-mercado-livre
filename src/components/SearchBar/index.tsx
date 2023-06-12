import { BsSearch } from 'react-icons/bs';

export const SearchBar = () => {
  return (
    <form>
      <input 
        type="search"
        placeholder="Buscar produtos"
        className="search__input"
        required 
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>


  );
};
