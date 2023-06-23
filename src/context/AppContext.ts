import { Dispatch, SetStateAction, createContext } from 'react';
import { TProduct } from '../services/api/fetchProducts';

type TAppContext = {
  products: TProduct[];
  setProducts: Dispatch<SetStateAction<TProduct[]>>;

  loading: boolean;
  setLoading: (isLoading: boolean) => void;

  cartItems: TProduct[];
  setCartItems: Dispatch<SetStateAction<TProduct[]>>;

  isCartVisible: boolean;
  setCartVisible: (visible: boolean) => void;
}

export const AppContext = createContext({} as TAppContext);
