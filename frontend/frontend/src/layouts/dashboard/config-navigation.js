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
  store:iconifyIcon('material-symbols:store'),
  delivery:iconifyIcon('icon-park-outline:delivery')
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('overview'),
        items: [
          { title: t('Store'), path: paths.dashboard.root, icon: ICONS.store },
          { title: t('analytics'), path: paths.dashboard.general.ecommerce, icon: ICONS.analytics },
          // { title: t('analytics'), path: paths.dashboard.general.analytics, icon: ICONS.analytics },
        ],
      },

      {
        subheader: t('management'),
        items: [
          {
            title: t('products'), path: paths.dashboard.product.root, icon: ICONS.product,
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
  { _id: 102, title: "Alexa Skills" },
  { _id: 103, title: "Amazon Devices" },
  { _id: 104, title: "Amazon Fashion" },
  { _id: 105, title: "Amazon Fresh" },
  { _id: 106, title: "Amazon Pharmacy" },
  { _id: 107, title: "Appliance" },
  { _id: 108, title: "Apps & Games" },
  { _id: 109, title: "Automobile Audiobooks" },
  { _id: 110, title: "Electronics" },
  { _id: 111, title: "Girls' Fashion" },
  { _id: 112, title: "Health & Household" },
  { _id: 113, title: "Home & Kitchen" },
  { _id: 114, title: "Industrial & Scientific" },
  { _id: 115, title: "Kindle Store" },
  { _id: 116, title: "Luggage" },
  { _id: 117, title: "Men's Fashion" },
  { _id: 118, title: "Movies & TV" },
  { _id: 119, title: "Music, CDs & Vinyl" },
  { _id: 120, title: "Pet Supplies" },
  { _id: 121, title: "Prime Video" },
  { _id: 122, title: "Software" },
  { _id: 123, title: "Sports & Outdoors" },
  { _id: 124, title: "Tools & Home Improvement" },
  { _id: 125, title: "Toys & Games" },
  { _id: 126, title: "Video Games" },
  { _id: 127, title: "Women's Fashion" },
];

export const NavbarBottomLinks = [
  { _id: 102, title: "Vape Devices" },
  { _id: 102, title: "Vape Juice" },
  { _id: 102, title: "Salt Nic" },
  { _id: 102, title: "Pod Systems" },
  { _id: 102, title: "Disposables" },
  { _id: 102, title: "Myle" },
  { _id: 102, title: "Juul" },
  { _id: 102, title: "Accessories" },
  { _id: 102, title: "Sale" },
  { _id: 102, title: "Delivery Info" },
];