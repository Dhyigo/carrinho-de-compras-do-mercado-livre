import { memo, useContext, useEffect } from 'react';

import { fetchProducts } from '../../services/api/fetchProducts';
import { ProductCard } from '../ProductCard';
import { Loading } from '../Loading';
import { AppContext } from '../../context/AppContext';

import './style.css';

export const Products = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  
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
