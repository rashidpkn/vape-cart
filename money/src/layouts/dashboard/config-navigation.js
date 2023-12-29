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
          { title: t('Users'), path: paths.dashboard.user.list, icon: ICONS.user },
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
