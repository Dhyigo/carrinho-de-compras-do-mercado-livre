import { BsCartDashFill } from 'react-icons/bs';
import './style.css';
import { TProduct } from '../../services/api/fetchProducts';
import { formatCurrency } from '../../utils/formatCurrency';

type TCartItemProps = {
  data: TProduct;
}

export const CartItem = ({ data }: TCartItemProps) => {
  const { thumbnail, title, price } = data;

  return (
    <section className="cart-item">
      <img className="cart-item-image" src={thumbnail} alt={title} />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>
        <button className="button__remove-item" type="button">
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};
