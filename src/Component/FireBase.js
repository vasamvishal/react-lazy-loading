import firebase from "firebase";

var Appconfig = {
    apiKey: "AIzaSyBhMnFjne9MB8cS81bVH1OuvLwK_Z6zI_Q",
    authDomain: "xbay-2.firebaseapp.com",
    databaseURL: "https://xbay-2.firebaseio.com",
    projectId: "xbay-2",
    storageBucket: "xbay-2.appspot.com",
    messagingSenderId: "268201898880",
    appId: "1:268201898880:web:3a3833b6d3653c045d4765",
    measurementId: "G-FFTRNZN75W"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(Appconfig);

  export default fire.database().ref();