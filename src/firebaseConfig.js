import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3qz8DGs7ggBneH8JKwrZ_SdYascb41v0",
  authDomain: "b-daywishes.firebaseapp.com",
  projectId: "b-daywishes",
  storageBucket: "b-daywishes.appspot.com",
  messagingSenderId: "937325615629",
  appId: "1:937325615629:web:2eb3c2accee404ccfbd344",
  measurementId: "G-87TE6QDS0L",
};

const firebaseInit = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
