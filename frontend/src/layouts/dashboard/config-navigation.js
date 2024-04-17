import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const iconifyIcon = (name) => (
  // OR
  <Iconify icon={name} />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  chat: icon('ic_chat'),
  user: icon('ic_user'),
  lock: icon('ic_lock'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  invoice: icon('ic_invoice'),
  product: iconifyIcon('akar-icons:vape-kit'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  store: iconifyIcon('material-symbols:store'),
  delivery: iconifyIcon('icon-park-outline:delivery'),
  payout: iconifyIcon('fa:usd'),
  rocket: iconifyIcon('ion:rocket-outline'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        items: [
          { title: t('Store'), path: paths.dashboard.root, icon: ICONS.store },
          { title: t('analytics'), path: paths.dashboard.general.ecommerce, icon: ICONS.analytics },
          // { title: t('analytics'), path: paths.dashboard.general.analytics, icon: ICONS.analytics },
        ],
      },

      {
        items: [
          {
            title: t('products'),
            path: paths.dashboard.product.root,
            icon: ICONS.product,
            children: [
              { title: t('products'), path: paths.dashboard.product.root },
              { title: t('create new product'), path: paths.dashboard.product.new },
            ],
          },

          // ORDER
          {
            title: t('orders'),
            path: paths.dashboard.order.root,
            icon: ICONS.order,
            // children: [
            //   { title: t('orders'), path: paths.dashboard.order.root },
            // ],
          },

          // INVOICE
          {
            title: t('invoice'),
            path: paths.dashboard.invoice.root,
            icon: ICONS.invoice,
            // children: [
            //   { title: t('invoice'), path: paths.dashboard.invoice.root },
            //   // { title: t('details'), path: paths.dashboard.invoice.demo.details },
            //   { title: t('create new invoice'), path: paths.dashboard.invoice.new },
            //   // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
            // ],
          },

          {
            title: t('Delivery'),
            path: paths.dashboard.delivery,
            icon: ICONS.delivery,
          },
          { title: t('payout'), path: '/dashboard/payout', icon: ICONS.payout },
          { title: t('boost'), path: '/dashboard/boost', icon: ICONS.rocket },

          // CHAT
          {
            title: t('support'),
            path: paths.dashboard.chat,
            icon: ICONS.chat,
          },
        ],
      },
    ],
    [t]
  );

  return data;
}

export const allItems = [
  { _id: 102, title: 'SMOK' },
  { _id: 103, title: 'Vaporesso' },
  { _id: 104, title: 'Uwell' },
  { _id: 105, title: 'Innokin' },
  { _id: 106, title: 'Voopoo' },
  { _id: 107, title: 'Geek Vape' },
  { _id: 108, title: 'VGOD' },
  { _id: 109, title: 'Nasty' },
  { _id: 110, title: 'Ruthless' },
  { _id: 111, title: 'BLVK Unicorn' },
  { _id: 112, title: 'Nerd' },
  { _id: 113, title: 'Vampire Vape' },
  { _id: 114, title: 'Dinner Lady' },
  { _id: 115, title: 'Zeus Juice' },
  { _id: 116, title: 'Cambridge Labs' },
  { _id: 117, title: 'Core' },
  { _id: 118, title: 'Relx' },
  { _id: 119, title: 'Youto' },
  { _id: 120, title: 'Tugboat' },
  { _id: 121, title: 'XTRA' },
  { _id: 122, title: 'Esco Bars' },
  { _id: 123, title: 'VICIG' },
  { _id: 124, title: 'Vudu' },
  { _id: 125, title: 'Colls & Pods' },
  { _id: 126, title: 'Tanks, Glass & Tips' },
  { _id: 127, title: 'Batteries and Lanyards' },
];

export const NavbarBottomLinks = [
  { _id: 102, title: 'Vape Devices' },
  { _id: 103, title: 'Vape Juice' },
  { _id: 104, title: 'Salt Nic' },
  { _id: 105, title: 'Pod Systems' },
  { _id: 106, title: 'Disposables' },
  { _id: 107, title: 'Accessories' },
  { _id: 108, title: 'Sale' },
  { _id: 109, title: 'Delivery Info' },
];

export const ProductTitle = [
  { _id: 110, title: 'VAPE DEVICES' },
  { _id: 111, title: 'VAPE JUICE' },
  { _id: 112, title: 'SALT NIC' },
  { _id: 113, title: 'POD SYSTEMS' },
];
