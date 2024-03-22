import { Helmet } from 'react-helmet-async';
// sections
import { FirebaseVerifyView } from 'src/sections/auth/firebase';

// ----------------------------------------------------------------------

export default function VerifyPage() {
  return (
    <>
      <Helmet>
        <title> Verify</title>
      </Helmet>

      <FirebaseVerifyView />
    </>
  );
}
