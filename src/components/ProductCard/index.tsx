import { BsFillCartPlusFill } from 'react-icons/bs';
import './style.css';
import { TProduct } from '../../services/api/fetchProducts';
import { formatCurrency } from '../../utils/formatCurrency';

type TProductCardProps = {
  data: TProduct;
}

export const ProductCard = ({ data }: TProductCardProps) => {
  const { title, price, thumbnail } = data;

  return (
    <section className="product-card">
      <img className="card__img" src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={title} />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price)}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};
