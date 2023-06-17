import { SearchBar } from '../SearchBar';
import './style.css';
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
      </div>
    </header>
  );
};
