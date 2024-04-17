import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
//
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import api from 'src/utils/api';
import UserCard from './user-card';

// ----------------------------------------------------------------------

export default function UserCardList() {
  const [products, setProducts] = useState([]);

  const [store, setStore] = useState([]);

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(DB, 'users'));
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    setStore(users);
  };

  useEffect(() => {
    api.get('/products').then((res) => {
      setProducts(res.data.products);
    });
    getUsers();
  }, []);

  useState;
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
    >
      {store?.map((user) => (
        <UserCard key={user.uid} user={user} products={products} />
      ))}
    </Box>
  );
}

UserCardList.propTypes = {
  users: PropTypes.array,
};
