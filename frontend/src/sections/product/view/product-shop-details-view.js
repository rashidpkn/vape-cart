import { useCallback, useEffect, useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hook';

// components
import Iconify from 'src/components/iconify';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import api from 'src/utils/api';
import { useNavigate } from 'react-router';
import { useCheckout } from '../hooks';
import CartIcon from '../common/cart-icon';
import ProductDetailsReview from '../product-details-review';

import ProductDetailsSummary from '../product-details-summary';
import ProductDetailsCarousel from '../product-details-carousel';
import ProductDetailsDescription from '../product-details-description';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ProductShopDetailsView() {
  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;

  const settings = useSettingsContext();

  const { checkout, onAddCart, onGotoStep } = useCheckout();

  const [currentTab, setCurrentTab] = useState('description');

  const [product, setProduct] = useState({});
  const [parentProduct, setParentProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`products/${id}`, { params: { count: 1 } });
        setProduct(data);
        setParentProduct(data)
      } catch (error) {
        alert(error.response.data.message);
        navigate(paths.dashboard.product.root);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const renderProduct = product && (
    <>
      <CustomBreadcrumbs
        links={[
          { name: 'Home', href: '/' },
          {
            name: 'Shop',
            href: paths.product.root,
          },
          { name: product?.name },
        ]}
        sx={{ mb: 5 }}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <ProductDetailsCarousel product={product} />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <ProductDetailsSummary
            product={product}
            cart={checkout.cart}
            onAddCart={onAddCart}
            onGotoStep={onGotoStep}
            setProduct={setProduct}
            parentProduct={parentProduct}
          />
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
            {
              value: 'description',
              label: 'Description',
            },
            {
              value: 'reviews',
              label: `Reviews (${product.reviews?.length})`,
            },
          ].map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {currentTab === 'description' && (
          <ProductDetailsDescription description={product?.content} />
        )}

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
    <Container
      maxWidth={settings.themeStretch ? false : 'lg'}
      sx={{
        mt: 5,
        mb: 15,
      }}
    >
      <CartIcon totalItems={checkout.totalItems} />

      {product && renderProduct}
    </Container>
  );
}
