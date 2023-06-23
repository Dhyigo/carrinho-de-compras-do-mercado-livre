import { AiOutlineShoppingCart } from 'react-icons/ai';
import './style.css';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button 
      type="button" 
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
};
