import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: keyApi,
  authDomain: domainAuth,
  projectId: idProject,
  storageBucket: bucketStorage,
  messagingSenderId: idMessagingSender,
  appId: appIdentifier
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;