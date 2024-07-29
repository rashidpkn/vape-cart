// @mui
// routes
import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hook';
// components
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import { useEffect, useState } from 'react';
import api from 'src/utils/api';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import ProductNewEditForm from '../product-new-edit-form';

// ----------------------------------------------------------------------

export default function ProductEditView() {


  const params = useParams();

  const { id } = params;
  const [currentProduct, setCurrentProduct] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`products/${id}`);
        setCurrentProduct(data);
      } catch (error) {
        alert(error.response.data.message);
        navigate(paths.dashboard.product.root);
      }
    };

    fetchProduct();
  }, []);

  return (
    <Box px={5}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          {
            name: 'Product',
            href: paths.dashboard.product.root,
          },
          { name: currentProduct?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ProductNewEditForm currentProduct={currentProduct} />
    </Box>
  );
}
