import { useEffect, useState } from 'react'; // Import React hooks: useEffect for side effects, useState to store data

const useFetchProducts = () => { // Custom hook to fetch product data from an API
  const [products, setProducts] = useState([]);  // State to store the list of products
  const [error, setError] = useState(null); // State to store an error message if the fetch fails

  useEffect(() => { // useEffect runs when the component using this hook mounts
    fetch('https://dummyjson.com/products')   // Fetch product data from the external API
      .then((res) => res.json()) // Convert the response to JSON format
      .then((data) => setProducts(data.products))   // Save the products from the response to state
      .catch(() => setError('Failed to load products'));  // If something goes wrong, store an error message
  }, []);

  return { products, error }; // Return both products and error so other components can use them
};

export default useFetchProducts;