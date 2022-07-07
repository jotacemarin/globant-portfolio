const BASE_URL = 'https://api.escuelajs.co/api/v1/products';

export const getProducts = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};
