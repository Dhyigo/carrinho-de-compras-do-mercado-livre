import { createContext } from 'react';
import { TProduct } from '../services/api/fetchProducts';

type TAppContext = {
  products: TProduct[];
  setProducts: (ListProduct: TProduct[]) => void;

  loading: boolean;
  setLoading: (isLoading: boolean) => void;

  cartItem: TProduct[];
  setCartItems: (product: TProduct[]) => void;
}

export const AppContext = createContext({} as TAppContext);
