import { Helmet } from 'react-helmet-async';
import { useAuthContext } from 'src/auth/hooks';
// sections
import { FirebaseLoginView } from 'src/sections/auth/firebase';

// ----------------------------------------------------------------------

export default function LoginPage() {
const {user} = useAuthContext()
console.log(user);



  return (
    <>
      <Helmet>
        <title>  Login</title>
      </Helmet>

      <FirebaseLoginView />
    </>
  );
}
