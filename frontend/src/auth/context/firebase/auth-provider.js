import PropTypes from 'prop-types';
import { useEffect, useReducer, useCallback, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  applyActionCode,
} from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';
// config
import { FIREBASE_API } from 'src/config-global';
//
import api from 'src/utils/api';
import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const firebaseApp = initializeApp(FIREBASE_API);

const AUTH = getAuth(firebaseApp);

export const DB = getFirestore(firebaseApp);

// ----------------------------------------------------------------------

const initialState = {
  user: null,
  loading: true,
};

const reducer = (state, action) => {
  if (action.type === 'INITIAL') {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(() => {
    try {
      onAuthStateChanged(AUTH, async (user) => {
        if (user) {
          if (user) {
            const userProfile = doc(DB, 'users', user.uid);

            const docSnap = await getDoc(userProfile);

            const profile = docSnap.data();

            dispatch({
              type: 'INITIAL',
              payload: {
                user: {
                  ...user,
                  ...profile,
                  id: user.uid,
                  role: 'admin',
                },
              },
            });
          } else {
            dispatch({
              type: 'INITIAL',
              payload: {
                user: null,
              },
            });
          }
        } else {
          dispatch({
            type: 'INITIAL',
            payload: {
              user: null,
            },
          });
        }
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'INITIAL',
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email, password) => {
    const { user } = await signInWithEmailAndPassword(AUTH, email, password);
    if (!user.emailVerified) {
      window.location.href = `/auth/firebase/verify?email=${email}`;
    }
    initialize();
  }, []);

  // REGISTER
  const register = useCallback(
    async (
      email,
      password,
      firstName,
      lastName,
      storeName,
      phoneNumber,
      contactPersonInTouch,
      tradeLicense
    ) => {
      const newUser = await createUserWithEmailAndPassword(AUTH, email, password);

      await sendEmailVerification(newUser.user);

      const userProfile = doc(collection(DB, 'users'), newUser.user?.uid);

      await setDoc(userProfile, {
        uid: newUser.user?.uid,
        email,
        displayName: `${firstName} ${lastName}`,
        storeName,
        phoneNumber,
        contactPersonInTouch,
        tradeLicense,
      });

      await api.post('/notifications', {
        userId: newUser.user?.uid,
        role: 'admin',
        type: 'user',
        title: '🎉 New Partner Alert! 🎉',
        message: `Exciting news! A new partner, ${firstName} ${lastName}, has joined our platform. Please review and approve their profile. 🎊`,
        status: 'unread',
      });

      initialize();
    },
    []
  );

  // LOGOUT
  const logout = useCallback(async () => {
    await signOut(AUTH);
  }, []);

  // FORGOT PASSWORD
  const forgotPassword = useCallback(async (email) => {
    await sendPasswordResetEmail(AUTH, email);
  }, []);

  const handleVerifyEmail = useCallback(async (oobCode) => {
    console.log(oobCode);
    await applyActionCode(AUTH, oobCode);

    initialize();
  }, []);

  const checkAuthenticated = state.user?.emailVerified ? 'authenticated' : 'unauthenticated';
  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: 'firebase',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
      logout,
      register,
      forgotPassword,
      handleVerifyEmail,
      initialize
    }),
    [
      status,
      state.user,
      //
      login,
      logout,
      register,
      forgotPassword,
      handleVerifyEmail,
      initialize
    ]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
