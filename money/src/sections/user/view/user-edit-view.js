// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hook';
// _mock
import { _userList } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import UserNewEditForm from '../user-new-edit-form';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';

// ----------------------------------------------------------------------

export default function UserEditView() {
  const settings = useSettingsContext();

  const params = useParams();

  const { id } = params;


  const [currentUser, setCurrentUser] = useState()

  const getUsers = async()=>{
    const querySnapshot = await getDocs(query(collection(DB, 'users'), where('uid', '==', id)))
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    
    setCurrentUser(users[0])
  }

  useEffect(() => {
 
   getUsers()
  }, [])

  

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'User',
            href: paths.dashboard.user.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <UserNewEditForm currentUser={currentUser} />
    </Container>
  );
}
