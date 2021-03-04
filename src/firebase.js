// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDftpQYCzUyRhQcYSvdf_yg9rRBPzOSFuM",
    authDomain: "imessage-1ba97.firebaseapp.com",
    projectId: "imessage-1ba97",
    storageBucket: "imessage-1ba97.appspot.com",
    messagingSenderId: "195349215657",
    appId: "1:195349215657:web:eda8558b4a2775c8b16cb8",
    measurementId: "G-EQTRVSRG33"
  };

  const fiebaseApp=firebase.initializeApp(firebaseConfig);

  const db=fiebaseApp.firestore();

  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();

  export{
      auth,
      provider,
  }

  export default db;