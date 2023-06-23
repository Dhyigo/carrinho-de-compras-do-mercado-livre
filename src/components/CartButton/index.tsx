import { AiOutlineShoppingCart } from 'react-icons/ai';
import './style.css';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const CartButton = () => {
  const { cartItems } = useContext(AppContext);

  return (
    <button type="button" className="cart__button">
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
};
