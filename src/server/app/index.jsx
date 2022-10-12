import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_Auth_Domain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  appId: process.env.REACT_APP_AppId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
