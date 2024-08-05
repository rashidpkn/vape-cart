import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router';
import api from 'src/utils/api';

import './style.css';
import { Icon } from '@iconify/react';
import { useCheckout } from 'src/sections/product/hooks';
import { paths } from 'src/routes/paths';
import { Helmet } from 'react-helmet-async';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SearchPage() {
  const { onAddCart } = useCheckout();
  const navigate = useNavigate();
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const _getProduct = useCallback(async () => {
    try {
      const { data } = await api.get('/products', {
        params: {
          name,
          perPage: 2000,
          status: 'Published',
        },
      });
      setProducts(
        data.products.filter((pr) => !(pr.productGroup === 'parent' && pr.type === 'Variable'))
      );
      setDataFetched(true);
    } catch (error) {}
  }, [name]);

  const _AddCart = async (product) => {
    console.log(product);
    try {
      onAddCart({
        id: product.id,
        name: product.name,
        price: product.salePrice || product.regularPrice,
        images: product.images,
        subTotal: product.salePrice,
        userId: product.userId,
        quantity: 1,
      });
      navigate(paths.product.checkout);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getProduct();
  }, [name]);

  return (
    <>
      <Helmet>
        <title>{name} | Search Result</title>
      </Helmet>
      <main className="search">
        <h1>Shop</h1>

        {!!products.length && (
          <div className="products">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <div className="img">
                  <img src={product.images[0]} alt="" />
                  <div
                    className="cart"
                    onClick={() => {
                      _AddCart(product);
                    }}
                  >
                    <Icon icon="eva:shopping-cart-outline" className="cart-icon" />
                  </div>
                </div>

                <Link to={`/product/${product.id}`}>
                  <p className="name">{product.name}</p>
                </Link>

                <div className="info">
                  <p className="category">{product.category}</p>
                  <p>
                    <del> AED ${product.regularPrice}</del> AED ${product.salePrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!products.length && dataFetched && (
          <div className="no-product">
            <h2>Unfortunately, we couldn't find any products with {name} name.</h2>
            <Link to="/">
              <Button variant="contained" color="success">
                Home Page
              </Button>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
