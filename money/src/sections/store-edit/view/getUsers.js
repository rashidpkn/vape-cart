import { getDocs, query, collection, where } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';

async function GetStore(id) {
  const querySnapshot = await getDocs(query(collection(DB, 'users'), where('uid', '==', id)));
  const users = [];

  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return users[0];
}

export default GetStore;
