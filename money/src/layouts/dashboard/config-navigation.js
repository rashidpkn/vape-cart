import { useCallback, useEffect, useMemo, useState } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import Label from 'src/components/label';
import api from 'src/utils/api';

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
  customer: iconifyIcon('raphael:customer'),
  payout: iconifyIcon('fa:usd'),
  rocket: iconifyIcon('ion:rocket-outline'),
};

// ----------------------------------------------------------------------

export function useNavData() {

  const [orders, setOrders] = useState([])


  const getOrders = useCallback(
    async () => {
      const { data } = await api.get('/orders', {
        params: {
          status: "Order received"
        }
      })

      setOrders(data)
    },
    [],
  )

  useEffect(() => {
    getOrders()

    const fetchOrders = setInterval(() => {
      getOrders()
    }, 10000);

    return () => {
      clearInterval(fetchOrders)
    }

  }, [])






  const { t } = useLocales();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('overview'),
        items: [
          { title: t('home'), path: paths.dashboard.root, icon: ICONS.store },
          { title: t('analytics'), path: paths.dashboard.general.ecommerce, icon: ICONS.analytics },
          // { title: t('store'), path: paths.dashboard.user.list, icon: ICONS.user },
          { title: t('Partners'), path: paths.dashboard.user.cards, icon: ICONS.user },
          { title: t('customer'), path: '/dashboard/customer', icon: ICONS.customer },
          // { title: t('analytics'), path: paths.dashboard.general.analytics, icon: ICONS.analytics },
        ],
      },

      {
        subheader: t('management'),
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


          {
            title: t('orders'),
            path: paths.dashboard.order.root,
            icon: ICONS.order,
            info: <Label color="primary" sx={{ color: '#000' }} >{orders.length}</Label>

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

          // {
          //   title: t('Delivery'),
          //   path: paths.dashboard.delivery,
          //   icon: ICONS.delivery,
          // },

          // CHAT

          { title: t('payout'), path: '/dashboard/payout', icon: ICONS.payout },
          { title: t('boost'), path: '/dashboard/boost', icon: ICONS.rocket },
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
