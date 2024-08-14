import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
// utils
import { fToNow } from 'src/utils/format-time';
import { useCallback } from 'react';
import api from 'src/utils/api';

// ----------------------------------------------------------------------

export default function NotificationItem({ notification, setNotifications }) {
  const readNotification = useCallback(async () => {
    await api.patch(`/notifications/${notification.id}`, { status: 'readed' });
    setNotifications((_) => _.filter((__) => __.id !== notification.id));
  }, []);

  const renderAvatar = (
    <ListItemAvatar>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          bgcolor: 'background.neutral',
        }}
      >
        <Box
          component="img"
          src={`/assets/icons/notification/${
            (notification.type === 'product' && 'ic_order') ||
            (notification.type === 'order' && 'ic_delivery') ||
            (notification.type === 'chat' && 'ic_chat') ||
            (notification.type === 'mail' && 'ic_mail')
          }.svg`}
          sx={{ width: 24, height: 24 }}
        />
      </Stack>
    </ListItemAvatar>
  );

  const renderText = (
    <ListItemText
      disableTypography
      primary={reader(notification.title)}
      secondary={
        <Box sx={{ typography: 'caption', color: 'text.disabled' }}>
          <p style={{ margin: 0, padding: 0, fontSize: '12px' }}> {notification.message}</p>
          <p style={{ margin: 0, padding: 0, fontSize: '10px' }}>
            {' '}
            {fToNow(notification.createdAt)}
          </p>
        </Box>
      }
    />
  );

  const renderUnReadBadge = notification.status === 'unread' && (
    <Box
      sx={{
        top: 26,
        width: 8,
        height: 8,
        right: 20,
        borderRadius: '50%',
        bgcolor: 'info.main',
        position: 'absolute',
      }}
    />
  );

  return (
    <ListItemButton
      onClick={readNotification}
      disableRipple
      sx={{
        p: 2.5,
        alignItems: 'flex-start',
        borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      {renderUnReadBadge}

      {renderAvatar}

      <Stack sx={{ flexGrow: 1 }}>{renderText}</Stack>
    </ListItemButton>
  );
}

NotificationItem.propTypes = {
  notification: PropTypes.object,
};

function reader(data) {
  return (
    <Box
      dangerouslySetInnerHTML={{ __html: data }}
      sx={{
        mb: 0.5,
        '& p': { typography: 'body2', m: 0 },
        '& a': { color: 'inherit', textDecoration: 'none' },
        '& strong': { typography: 'subtitle2' },
      }}
    />
  );
}
