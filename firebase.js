import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD7RrWJYukFNhfN8rlTMQLbmDIbbfXZopI',
  authDomain: 'insta-2-f7d68.firebaseapp.com',
  projectId: 'insta-2-f7d68',
  storageBucket: 'insta-2-f7d68.appspot.com',
  messagingSenderId: '563963450762',
  appId: '1:563963450762:web:2a8525ce513d4d173e6473',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
