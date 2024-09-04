// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUZVI_-1LyfctemXeNlQxIwjqzuNHF1E",
  authDomain: "vanpass-59696.firebaseapp.com",
  projectId: "vanpass-59696",
  storageBucket: "vanpass-59696.appspot.com",
  messagingSenderId: "929821455131",
  appId: "1:929821455131:web:cc492e5330f7f8cd3919be",
  measurementId: "G-1MEXG2RBJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);