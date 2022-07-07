import {useEffect, useState} from 'react';
import {getProducts} from '../../api/mocky';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchApi() {
    setProducts([]);
    setLoading(true);
    setError(null);

    try {
      const response = await getProducts();

      setProducts(response);
      setLoading(false);
    } catch (fetchError) {
      setLoading(false);
      setError(fetchError.message);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return {
    products,
    loading,
    error,
  };
};

export default useProducts;
