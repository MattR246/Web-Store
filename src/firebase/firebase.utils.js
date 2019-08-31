import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCh_JSxANPEaY1nZC3QRc2XVF6XD8sopuw",
    authDomain: "crwn-db-e6e34.firebaseapp.com",
    databaseURL: "https://crwn-db-e6e34.firebaseio.com",
    projectId: "crwn-db-e6e34",
    storageBucket: "",
    messagingSenderId: "584633659729",
    appId: "1:584633659729:web:d39e266b4c59f38f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;