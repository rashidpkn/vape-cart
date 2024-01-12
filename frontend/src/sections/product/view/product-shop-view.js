import orderBy from 'lodash/orderBy';
import isEqual from 'lodash/isEqual';
import { useCallback, useEffect, useState } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material'
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// _mock
import {
  PRODUCT_SORT_OPTIONS,
  PRODUCT_COLOR_OPTIONS,
  PRODUCT_GENDER_OPTIONS,
  PRODUCT_RATING_OPTIONS,
  PRODUCT_CATEGORY_OPTIONS,
} from 'src/_mock';
// components

//
import api from 'src/utils/api';
import { useCheckout } from '../hooks';
import CartIcon from '../common/cart-icon';
import ProductList from '../product-list';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductFiltersResult from '../product-filters-result';
import HomeHero from '../home-hero';
import HomeLookingFor from '../home-looking-for';
import HomeSidebar from '../home-sidebar';

// ----------------------------------------------------------------------

const defaultFilters = {
  gender: [],
  colors: [],
  rating: '',
  category: 'all',
  priceRange: [0, 200],
};

// ----------------------------------------------------------------------

export default function ProductShopView() {

  const { checkout } = useCheckout();

  const openFilters = useBoolean();

  const [sortBy, setSortBy] = useState('featured');




  const [filters, setFilters] = useState(defaultFilters);



  const [products, setProducts] = useState({})
  const [name, setName] = useState('')

  const fetchProduct = async () => {
    try {
      const { data: { products: p, count } } = await api.get('products',{params:{name,sortBy,perPage:1000}})
      setProducts(p)
    } catch (error) {
      alert("error Occure")
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [sortBy,name])


  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const dataFiltered = applyFilter({
    inputData: products,
    filters,
    sortBy,
  });

  const canReset = !isEqual(defaultFilters, filters);


  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);


  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      {/* <ProductSearch
        setName={setName}
        name={name}
        fetchProduct={fetchProduct}
      /> */}
      <Box sx={{maxWidth:'275px',width:'100%'}} />

<Typography variant="h4" > Shop </Typography>

      <Stack direction="row" spacing={1} flexShrink={0}>
        <ProductFilters
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          //
          filters={filters}
          onFilters={handleFilters}
          //
          canReset={canReset}
          onResetFilters={handleResetFilters}
          //
          colorOptions={PRODUCT_COLOR_OPTIONS}
          ratingOptions={PRODUCT_RATING_OPTIONS}
          genderOptions={PRODUCT_GENDER_OPTIONS}
          categoryOptions={['all', ...PRODUCT_CATEGORY_OPTIONS]}
        />

        <ProductSort sort={sortBy} onSort={handleSortBy} sortOptions={PRODUCT_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );

  const renderResults = (
    <ProductFiltersResult
      filters={filters}
      onFilters={handleFilters}
      //
      canReset={canReset}
      onResetFilters={handleResetFilters}
      //
      results={dataFiltered.length}
    />
  );



  return (
    <Container
      maxWidth={false}
      
      sx={{
        mb: 15,
      }}
    >
      <HomeHero 
      setName={setName}
      name={name}
      fetchProduct={fetchProduct}
       />
      <HomeLookingFor />

      <CartIcon totalItems={checkout.totalItems} />

      

      <Stack
        spacing={2.5}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        {renderFilters}

        {canReset && renderResults}
      </Stack>

      <Stack direction="row">
        <HomeSidebar />
        <ProductList products={dataFiltered} loading={false} />
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, filters, sortBy }) {
  const { gender, category, colors, priceRange, rating } = filters;

  const min = priceRange[0];

  const max = priceRange[1];

  // SORT BY
  if (sortBy === 'featured') {
    inputData = orderBy(inputData, ['totalSold'], ['desc']);
  }

  if (sortBy === 'newest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'priceDesc') {
    inputData = orderBy(inputData, ['price'], ['desc']);
  }

  if (sortBy === 'priceAsc') {
    inputData = orderBy(inputData, ['price'], ['asc']);
  }

  // FILTERS
  if (gender.length) {
    inputData = inputData.filter((product) => gender.includes(product.gender));
  }

  if (category !== 'all') {
    inputData = inputData.filter((product) => product.category === category);
  }

  if (colors.length) {
    inputData = inputData.filter((product) =>
      product.colors.some((color) => colors.includes(color))
    );
  }

  if (min !== 0 || max !== 200) {
    inputData = inputData.filter((product) => product.price >= min && product.price <= max);
  }

  if (rating) {
    inputData = inputData.filter((product) => {
      const convertRating = (value) => {
        if (value === 'up4Star') return 4;
        if (value === 'up3Star') return 3;
        if (value === 'up2Star') return 2;
        return 1;
      };
      return product.totalRatings > convertRating(rating);
    });
  }

  return inputData;
}
