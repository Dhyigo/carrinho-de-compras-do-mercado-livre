import { useContext } from 'react';
import { CartItem } from '../CartItem';
import { AppContext } from '../../context/AppContext';
import './style.css';
import { formatCurrency } from '../../utils/formatCurrency';

export const Cart = () =>  {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, { price }) => acc + price, 0);
  
  return (
    <section className={`cart ${isCartVisible ? 'cart--active': ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (<CartItem key={cartItem.id} data={cartItem} />))}
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice)}</div>
    </section>
  );
};
