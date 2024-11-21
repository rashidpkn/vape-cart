import { useState, useCallback } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _userAbout, _userPlans, _userPayment, _userInvoices, _userAddressBook } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import { Box } from '@mui/material';
import AccountGeneral from '../account-general';
import AccountBilling from '../account-billing';
import AccountSocialLinks from '../account-social-links';
import AccountChangePassword from '../account-change-password';
import AccountFinancials from '../account-financial';
import AccountComission from '../account-comission';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'general',
    label: 'General',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  {
    value: 'billing',
    label: 'Contact',
    icon: <Iconify icon="solar:bill-list-bold" width={24} />,
  },
  {
    value: 'financials',
    label: 'Financials',
    icon: <Iconify icon="solar:bill-list-bold" width={24} />,
  },
  // {
  //   value: 'notifications',
  //   label: 'Notifications',
  //   icon: <Iconify icon="solar:bell-bing-bold" width={24} />,
  // },
  // {
  //   value: 'social',
  //   label: 'Social links',
  //   icon: <Iconify icon="solar:share-bold" width={24} />,
  // },
  {
    value: 'commission',
    label: 'Commission',
    icon: <Iconify icon="solar:bill-list-bold" width={24} />,
  },
  {
    value: 'security',
    label: 'Security',
    icon: <Iconify icon="ic:round-vpn-key" width={24} />,
  },
];

// ----------------------------------------------------------------------

export default function AccountView() {

  const [currentTab, setCurrentTab] = useState('general');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <Box px={5}>
      <CustomBreadcrumbs
        heading="Account"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'Account' },
        ]}
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

      {currentTab === 'general' && <AccountGeneral />}

      {currentTab === 'billing' && (
        <AccountBilling
          plans={_userPlans}
          cards={_userPayment}
          invoices={_userInvoices}
          addressBook={_userAddressBook}
        />
      )}

      {currentTab === 'financials' && <AccountFinancials />}

      {currentTab === 'social' && <AccountSocialLinks socialLinks={_userAbout.socialLinks} />}

      {currentTab === 'security' && <AccountChangePassword />}
      {currentTab === 'commission' && <AccountComission />}
    </Box>
  );
}
