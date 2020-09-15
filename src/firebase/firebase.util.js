import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBq1rbol9KD1tsWCymcJ926-dBLweSpxFU',
  authDomain: 'clothing-ecommerce-9d48b.firebaseapp.com',
  databaseURL: 'https://clothing-ecommerce-9d48b.firebaseio.com',
  projectId: 'clothing-ecommerce-9d48b',
  storageBucket: 'clothing-ecommerce-9d48b.appspot.com',
  messagingSenderId: '270252070674',
  appId: '1:270252070674:web:32194191dcb9834d6e45cb',
  measurementId: 'G-02S112PDLY',
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
/* provider.setCustomerParameters({ 'prompt': 'select_account' }); */

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
