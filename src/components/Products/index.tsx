import { useEffect, useState } from 'react';
import './style.css';
import { TProduct, fetchProducts } from '../../services/api/fetchProducts';
import { ProductCard } from '../ProductCard';
import { Loading } from '../Loading';

export const Products = () => {
  const [products, setProducts] = useState([] as TProduct[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const products = await fetchProducts('iPhone');
      setProducts(products);
      setLoading(false);
    };

    getProducts();
  }, []);
  
  return (
    (loading && <Loading />) || (
      <section className="products container">
        {
          products.map((product) => (<ProductCard key={product.id} data={product}/>))
        }
      </section>
    )
    
  );
};
