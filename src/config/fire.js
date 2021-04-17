import firebase from "firebase"



  var firebaseConfig = {
    apiKey: "AIzaSyAaH2rhguAD_tqoETiYfxgBWpAZRD6WN9I",
    authDomain: "react-firebase-auth-787a5.firebaseapp.com",
    databaseUrl:"https://react-firebase-auth-787a5.firebaseio.com",
    projectId: "react-firebase-auth-787a5",
    storageBucket: "react-firebase-auth-787a5.appspot.com",
    messagingSenderId: "1050182573194",
    appId: "1:1050182573194:web:0416a1ba86163a23992173"
  };

  const fire=firebase.initializeApp(firebaseConfig)
export default fire;
