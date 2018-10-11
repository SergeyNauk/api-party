import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBwvspbA2CdeMCER4GhSCg0w7IRZ0VqesA",
    authDomain: "api-party-3930a.firebaseapp.com",
    databaseURL: "https://api-party-3930a.firebaseio.com",
    projectId: "api-party-3930a",
    storageBucket: "api-party-3930a.appspot.com",
    messagingSenderId: "458131046640"
  };

  const fire = firebase.initializeApp(config);
  export default fire;
   