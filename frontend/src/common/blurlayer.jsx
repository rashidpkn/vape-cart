import React, { useCallback, useEffect, useState } from 'react';
import api from 'src/utils/api';
import Button from '@mui/material/Button';

import './blur.css';
import { useAuthContext } from 'src/auth/hooks';
import { Link } from 'react-router-dom';

export default function BlurLayer({ children }) {
  const [products, setProducts] = useState([]);
  const { user } = useAuthContext();

  const fetchProduct = useCallback(() => {
    api.get('/products').then((res) => {
      setProducts(res.data.products.filter((product) => product.userId === user.uid));
      console.log(res.data);
    });
  }, []);
  useEffect(() => {
    fetchProduct();
  }, []);

  if (products.length) {
    return null;
  }
  return (
    <div className="blurLayout">
      <p>You haven't added any products to your store. Please start adding products to see them.</p>
      <Link to="/dashboard/product/new">
        <Button variant="contained" color="success">
          Add Product
        </Button>
      </Link>
    </div>
  );
}
