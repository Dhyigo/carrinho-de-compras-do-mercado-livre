import { useContext } from 'react';
import { CartItem } from '../CartItem';
import { AppContext } from '../../context/AppContext';
import './style.css';

export const Cart = () =>  {
  const { cartItems } = useContext(AppContext);
  return (
    <section className="cart">
      <div className="cart-items">
        {cartItems.map((cartItem) => (<CartItem key={cartItem.id} data={cartItem} />))}
      </div>

      <div className="cart-resume">resumo</div>
    </section>
  );
};
