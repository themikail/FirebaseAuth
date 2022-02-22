import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDdFA24PRCvzquxVt2zhZEZiub11wjmRlA",
  authDomain: "limon-bef96.firebaseapp.com",
  databaseURL:
    "https://limon-bef96-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "limon-bef96",
  storageBucket: "limon-bef96.appspot.com",
  messagingSenderId: "858857208906",
  appId: "1:858857208906:web:a79d2118e46a609b0a3ab3",
  measurementId: "G-F4L52T54M3",
});

export const auth = app.auth();
export default app;
