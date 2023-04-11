import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu2tq9ZTWOMy9knTgHDlGe7NKXDHv0nJE",
  authDomain: "laricadahora-1e3bc.firebaseapp.com",
  projectId: "laricadahora-1e3bc",
  storageBucket: "laricadahora-1e3bc.appspot.com",
  messagingSenderId: "887587469732",
  appId: "1:887587469732:web:b986fe2d459378617ea931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;