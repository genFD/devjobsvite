import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Home() {
  const [product, setProduct] = useState(null);
  const testBackend = async () => {
    try {
      const { data } = await axios.get('/api/products');
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    testBackend();
  }, []);

  return <div>Home</div>;
}

export default Home;
