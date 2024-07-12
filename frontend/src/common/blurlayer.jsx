import React from 'react';

import Button from '@mui/material/Button';

import './blur.css';

import { Link } from 'react-router-dom';

export default function BlurLayer({ children,products=[] }) {
  
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
