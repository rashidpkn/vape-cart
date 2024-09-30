import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router';
import api from 'src/utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import { Icon } from '@iconify/react';
import { useCheckout } from 'src/sections/product/hooks';
import { paths } from 'src/routes/paths';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  const category = new URLSearchParams(useLocation().search).get('category');
  const name = new URLSearchParams(useLocation().search).get('name');

  const { onAddCart } = useCheckout();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const _getProduct = useCallback(async () => {
    try {
      const { data } = await api.get('/products', {
        params: {
          perPage: 2000,
          category,
          status: 'Published',
          name
        },
      });
      setProducts(data.products);
      setDataFetched(true);
    } catch (error) {}
  }, [category,name]);

  const _AddCart = async (product) => {
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
      // navigate(paths.product.checkout);
      toast.success(`${product.name} is now in your cart at a price of AED${product.salePrice}.`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getProduct();
  }, [category,name]);

  const [openVariations, setOpenVariations] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});



  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Shop Page </title>
      </Helmet>
      <main className="search">
        <h1>Shop</h1>

        {!!products.length && (
          <div className="products">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <div className="img">
                  <Link to={`/product/${product.id}`}>
                  <img src={product.images[0]} alt="" />
                  </Link>
                  <div
                    className="cart"
                    onClick={() => {
                      setSelectedProduct(product);
                      if (product.type === 'Simple') {
                        _AddCart(product);
                      } else {
                        setOpenVariations(true);
                      }
                    }}
                  >
                    <Icon icon="eva:shopping-cart-outline" className="cart-icon" />
                  </div>
                </div>
                <Link to={`/product/${product.id}`}>
                  <p className="name">{product.name}</p>
                </Link>
                  <p className="category">{product.category}</p>
                <div className="info" style={{alignItems:'center'}}>
                  {product.type === 'Simple' && (
                    <>
                    {product.regularPrice > product.salePrice  ? <p style={{fontSize:'14px',fontWeight:'700'}}>
                      <del style={{fontSize:'13px',fontWeight:'500'}}>Was  AED {product.regularPrice}</del> Now AED {product.salePrice} 
                    </p> : <p style={{fontSize:'14px',fontWeight:'700'}}>AED {product.regularPrice}</p>}
                    {product.regularPrice > product.salePrice &&  <span style={{fontSize:'12px'}}> { (((product.regularPrice - product.salePrice) / product.regularPrice) * 100).toFixed(0)}% off </span>}
                    </>

                  )}
                  {
                    product.type  === 'Variable' && (
                      <p style={{fontSize:'14px',fontWeight:'700'}}>
                       Starting from  AED {Math.min(...product.variations.map(variation => parseFloat(variation.salePrice)))
                       } 
                    </p>
                    )
                  }
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

      <DisplayVariations
        openVariations={openVariations}
        setOpenVariations={setOpenVariations}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        _AddCart={_AddCart}
      />
    </>
  );
}

const DisplayVariations = ({
  openVariations,
  setOpenVariations,
  selectedProduct = { images: [] },
  setSelectedProduct,
  _AddCart,
}) => {
  const [selectedVariation, setSelectedVariation] = useState('');
  return (
    <Modal
      open={openVariations}
      onClose={(_) => setOpenVariations(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: 600,
          width: '100%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '8px',
          border: 'none',
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <img
            src={selectedProduct?.images?.[0]}
            height={400}
            alt=""
            style={{ height: '400px', borderRadius: '8px' }}
          />
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            width={400}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
              mt={3}
            >
              {selectedProduct.name}
            </Typography>

            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
              mt={3}
            >
              {!!selectedVariation && (
                <>
                  <del> AED {selectedProduct.regularPrice}</del> AED {selectedProduct.salePrice}
                </>
              )}
            </Typography>
          </Box>

          {!!selectedVariation && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} width={400}>
              <p style={{ fontSize: '12px' }}>Available : {selectedProduct.quantity}</p>
            </Box>
          )}

          <FormControl sx={{ width: '400px', mt: 3 }}>
            <InputLabel id="variations">Select Variations</InputLabel>
            <Select
              labelId="variations"
              label="Select Variations"
              value={selectedVariation}
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedVariation(e.target.value);
                const { track, quantity, regularPrice, salePrice, image } =
                  selectedProduct.variations.find(
                    (v) => JSON.stringify(v.attributes) === JSON.stringify(e.target.value)
                  );

                //   let images = selectedProduct.images
                //  if(image){
                //     images = image
                //  }

                setSelectedProduct((_) => ({
                  ..._,
                  track,
                  quantity,
                  regularPrice,
                  salePrice,
                  // images
                }));
              }}
            >
              {selectedProduct.variations?.map((variation, i) => (
                <MenuItem key={i} value={variation.attributes}>
                  {Object.keys(variation.attributes)
                    .map(
                      (e) =>
                        `${e.replace(/([A-Z])/, ' $1').replace(/^./, (str) => str.toUpperCase()) 
                        } : ${ 
                        variation.attributes[e]}`
                    )
                    .join(', ')}{' '}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="warning"
            sx={{ width: '400px', mt: 3 }}
            size="large"
            onClick={() => {
              const name =
                `${selectedProduct.name 
                }-${ 
                Object.keys(selectedVariation)
                  .map((a) => selectedVariation[a])
                  .join('-')}`;

              const product = { ...selectedProduct, name };
              console.log(product);
              _AddCart(product);
              setOpenVariations(false);
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
