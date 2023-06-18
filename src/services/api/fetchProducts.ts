export type TProduct = {
  title: string;
  thumbnail: string;
  price: number;
}

export const fetchProducts = async (query: string): Promise<TProduct[]> => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const { results } = await response.json(); 

  return results;
};
