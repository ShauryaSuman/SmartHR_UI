import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB3QQvEY0ztoUW5de9UqmcXqXfVLPRZiZE",
  authDomain: "bytical-77f13.firebaseapp.com",
  projectId: "bytical-77f13",
  storageBucket: "bytical-77f13.firebasestorage.app",
  messagingSenderId: "268094902774",
  appId: "1:268094902774:web:ee50d7503d061418b337d7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();