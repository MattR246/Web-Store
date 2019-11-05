import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCh_JSxANPEaY1nZC3QRc2XVF6XD8sopuw",
    authDomain: "crwn-db-e6e34.firebaseapp.com",
    databaseURL: "https://crwn-db-e6e34.firebaseio.com",
    projectId: "crwn-db-e6e34",
    storageBucket: "crwn-db-e6e34.appspot.com",
    messagingSenderId: "584633659729",
    appId: "1:584633659729:web:d39e266b4c59f38f"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
      return await batch.commit();
  };


  export const convertCollectionsSnapshopToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id, 
        title,
        items
      };
    });
    return transformedCollection.reduce((acc, collection) => {
      acc[collection.title.toLowerCase()] = collection;
      return acc;
    }, {});
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    });
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;