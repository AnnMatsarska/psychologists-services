import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDVQu6BAe0PZgWbiaOl1sCHA_kIRsdB05g',
  authDomain: 'psychologist-service-22fff.firebaseapp.com',
  projectId: 'psychologist-service-22fff',
  storageBucket: 'psychologist-service-22fff.appspot.com',
  messagingSenderId: '571898386180',
  appId: '1:571898386180:web:4df1ffb9c515e3d971a251',
  measurementId: 'G-ZJ6XZWSE4R',
  databaseURL:
    'https://psychologist-service-22fff-default-rtdb.europe-west1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
