import { useEffect, useState } from 'react';
import './style.css';
import { TProduct, fetchProducts } from '../../services/api/fetchProducts';
import { ProductCard } from '../ProductCard';

export const Products = () => {
  const [products, setProducts] = useState([] as TProduct[]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts('iPhone');

      setProducts(products);
    };

    getProducts();
  }, []);
  
  return (
    <section className="products container">
      
      {
        products.map((product) => (<ProductCard key={product.id} data={product}/>))
      }
    </section>
  );
};