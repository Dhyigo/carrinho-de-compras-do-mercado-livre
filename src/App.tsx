import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { AppContextProvider } from './context/AppContextProvider';

export const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <Products />
      <Cart />
    </AppContextProvider>
  );
};
