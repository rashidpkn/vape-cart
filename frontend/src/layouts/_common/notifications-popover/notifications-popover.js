import { m } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
// @mui
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { varHover } from 'src/components/animate';
//
import api from 'src/utils/api';
import { useAuthContext } from 'src/auth/hooks';
import { Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import NotificationItem from './notification-item';

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  const {
    user: { uid },
  } = useAuthContext();

  const fetchNotifications = useCallback(async () => {
    try {
      const { data } = await api.get('/notifications', {
        params: {
          status: 'unread',
          role: 'user',
          userId: uid,
        },
      });

      setNotifications(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchNotifications();
    const _fetch = setInterval(() => {
      fetchNotifications();
    }, 10000);

    return () => {
      clearInterval(_fetch);
    };
  }, []);

  const _readAllNotification = useCallback(async () => {
    try {
      notifications.map(async (notification) => {
        await api.patch(`/notifications/${notification.id}`, { status: 'readed' });
        setNotifications((_) => _.filter((__) => __.id !== notification.id));
      });
    } catch (error) {
      console.log(error);
    }
  }, [notifications]);

  const drawer = useBoolean();

  const smUp = useResponsive('up', 'sm');

  const totalUnRead = notifications.filter((item) => item.status === 'unread').length;

  const renderHead = (
    <Stack direction="row" alignItems="center" sx={{ py: 2, pl: 2.5, pr: 2.5, minHeight: 68 }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Notifications
      </Typography>

      <button
        onClick={_readAllNotification}
        style={{ backgroundColor: 'none', border: 'none', outline: 'none' }}
        title="Mark all as read"
      >
        <Icon
          icon="solar:check-read-broken"
          style={{ color: '#22bd80', height: '24px', width: '24px' }}
        />
      </button>

      {!smUp && (
        <IconButton onClick={drawer.onFalse}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      )}
    </Stack>
  );

  const renderList = (
    <Scrollbar>
      <List disablePadding>
        {viewAll &&
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              setNotifications={setNotifications}
            />
          ))}
        {!viewAll &&
          notifications
            .slice(0, 5)
            .map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                setNotifications={setNotifications}
              />
            ))}
      </List>
    </Scrollbar>
  );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        color={drawer.value ? 'primary' : 'default'}
        onClick={drawer.onTrue}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify icon="solar:bell-bing-bold-duotone" width={24} />
        </Badge>
      </IconButton>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 1, maxWidth: 420 },
        }}
      >
        {renderHead}

        <Divider />

        {renderList}

        <Box sx={{ p: 1 }}>
          <Button fullWidth size="large" onClick={() => setViewAll((_) => true)}>
            View All
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
