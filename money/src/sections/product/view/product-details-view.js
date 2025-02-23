import { useEffect, useCallback, useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// _mock
import { PRODUCT_PUBLISH_OPTIONS } from 'src/_mock';
// routes
import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hook';

// components
import Iconify from 'src/components/iconify';

//
import api from 'src/utils/api';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../hooks';
import { ProductDetailsSkeleton } from '../product-skeleton';
import ProductDetailsReview from '../product-details-review';
import ProductDetailsSummary from '../product-details-summary';
import ProductDetailsToolbar from '../product-details-toolbar';
import ProductDetailsCarousel from '../product-details-carousel';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export default function ProductDetailsView() {
  const params = useParams();

  const { id } = params;

  // const { product } = useGetProduct(`${id}`);

  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`products/${id}`);
        setProduct(data);
      } catch (error) {
        alert(error.response.data.message);
        navigate(paths.dashboard.product.root);
      }
    };

    fetchProduct();
  }, []);



  const [currentTab, setCurrentTab] = useState('reviews');

  const [publish, setPublish] = useState('');

  const { checkout, onAddCart, onGotoStep } = useCheckout();

  useEffect(() => {
    if (product) {
      setPublish(product?.publish);
    }
  }, [product]);

  const handleChangePublish = useCallback((newValue) => {
    setPublish(newValue);
  }, []);

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const renderSkeleton = <ProductDetailsSkeleton />;

  const renderProduct = product && (
    <>
      <ProductDetailsToolbar
        backLink={paths.dashboard.product.root}
        editLink={paths.dashboard.product.edit(`${product?.id}`)}
        liveLink={paths.product.details(`${product?.id}`)}
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={PRODUCT_PUBLISH_OPTIONS}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          {product && <ProductDetailsCarousel product={product} />}
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          {product && (
            <ProductDetailsSummary
              disabledActions
              product={product}
              cart={checkout.cart}
              onAddCart={onAddCart}
              onGotoStep={onGotoStep}
            />
          )}
        </Grid>
      </Grid>



      <Card>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            px: 3,
            boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {[
            // {
            //   value: 'description',
            //   label: 'Description',
            // },
            {
              value: 'reviews',
              // label: `Reviews (${product?.reviews.length})`,
              label: `Reviews (0)`,
            },
          ].map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {/* {currentTab === 'description' && (
          <ProductDetailsDescription description={product?.content} />
        )} */}

        {currentTab === 'reviews' && (
          <ProductDetailsReview
            ratings={product.ratings}
            reviews={product.reviews}
            totalRatings={product.totalRatings}
            totalReviews={product.totalReviews}
          />
        )}
      </Card>
    </>
  );

  return (
    <Box px={5}>
      {!product && renderSkeleton}

      {product && renderProduct}
    </Box>
  );
}
