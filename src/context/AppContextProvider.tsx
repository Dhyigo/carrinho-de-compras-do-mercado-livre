import { ReactNode, useMemo, useState } from 'react';
import { AppContext } from './AppContext';
import { TProduct } from '../services/api/fetchProducts';

type TAppContextProviderProps = {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: TAppContextProviderProps) => {
  const [products, setProducts] = useState([] as TProduct[]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([] as TProduct[]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = useMemo(() => ({
    products,
    setProducts,

    loading,
    setLoading,

    cartItems,
    setCartItems,

    isCartVisible,
    setIsCartVisible
  }), [products, loading, cartItems, isCartVisible]);
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
