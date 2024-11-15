// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCoM1egH_CACMmW27ufnd8KSXdBpW-Fpg8',
  authDomain: 'flashcard-b3370.firebaseapp.com',
  projectId: 'flashcard-b3370',
  storageBucket: 'flashcard-b3370.firebasestorage.app',
  messagingSenderId: '1005829706869',
  appId: '1:1005829706869:web:461a81f8a19007c915943c',
  measurementId: 'G-EJJ9H1QVK4',
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAnalytics(FIREBASE_APP);
