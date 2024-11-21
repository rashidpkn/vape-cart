import  { useCallback, useEffect } from 'react';
import { useAuthContext } from 'src/auth/hooks';

export default function Verified() {
  const { handleVerifyEmail } = useAuthContext();

  const urlParams = new URLSearchParams(window.location.search);

  const oobCode = urlParams.get('oobCode');

  const verify = useCallback(async () => {
    await handleVerifyEmail(oobCode);
    window.location.href = '/dashboard';
    // navigate();
  }, []);

  useEffect(() => {
    verify();
  }, []);

  return null;
}
