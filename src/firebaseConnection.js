// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCy7hDBWv420KRRegw3FfcfWoN9TpYULVg",
  authDomain: "pizzaria-bd54b.firebaseapp.com",
  projectId: "pizzaria-bd54b",
  storageBucket: "pizzaria-bd54b.appspot.com",
  messagingSenderId: "237561704815",
  appId: "1:237561704815:web:12de428a65a05c779d389a",
  measurementId: "G-LPPDNB52PG"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export {db};

