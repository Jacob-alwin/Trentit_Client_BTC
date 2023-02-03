// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWtaEkTYlQYyUvIuaHyjOQ9UbZomvKlXk",
  authDomain: "trentit-2022.firebaseapp.com",
  projectId: "trentit-2022",
  storageBucket: "trentit-2022.appspot.com",
  messagingSenderId: "938587294639",
  appId: "1:938587294639:web:8030bdaac002d5df083d5a",
  measurementId: "G-8FL3FY9ZE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
// const analytics = getAnalytics(app);