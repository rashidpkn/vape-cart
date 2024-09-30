import { useState, useCallback, useEffect } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// routes
import { paths } from 'src/routes/paths';
// _mock

// components
import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import { useParams } from 'src/routes/hook';
import { Box } from '@mui/material';
import AccountGeneral from '../account-general';
import AccountBilling from '../account-billing';
import AccountNotifications from '../account-notifications';
import AccountChangePassword from '../account-change-password';
import GetStore from './getUsers';
import DeliverySettings from '../DeliverySettings';
import AccountCommission from '../account-commission';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'general',
    label: 'General',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  {
    value: 'billing',
    label: 'Billing',
    icon: <Iconify icon="solar:bill-list-bold" width={24} />,
  },
  {
    value: 'deliverySettings',
    label: 'Delivery Settings',
    icon: <Iconify icon="mdi:truck-cargo-container" width={24} />,
  },
  {
    value: 'notifications',
    label: 'Notifications',
    icon: <Iconify icon="solar:bell-bing-bold" width={24} />,
  },
  {
    value: 'commission',
    label: 'Commission',
    icon: <Iconify icon="solar:bill-list-bold" width={24} />,
  },
];

// ----------------------------------------------------------------------

export default function StoreEdit() {
  const params = useParams();
  const { id } = params;

  const [user, setUser] = useState(false);

  const getuser = async () => {
    const user = await GetStore(id);
    setUser(user);
  };

  useEffect(() => {
    getuser();
  }, []);


  const [currentTab, setCurrentTab] = useState('general');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <Box px={5}>
      <CustomBreadcrumbs
        heading="Account"
        links={[{ name: 'Dashboard', href: paths.dashboard.root }]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      {currentTab === 'general' && user && <AccountGeneral user={user} />}

      {currentTab === 'billing' && <AccountBilling user={user} />}

      {currentTab === 'notifications' && <AccountNotifications />}

      {currentTab === 'security' && <AccountChangePassword />}

      {currentTab === 'deliverySettings' && <DeliverySettings user={user} />}
      {currentTab === 'commission' && <AccountCommission user={user} />}
    </Box>
  );
}
