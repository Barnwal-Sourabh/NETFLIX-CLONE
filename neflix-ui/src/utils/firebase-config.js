import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAv5cSdRhKFNye7P7kn_GJwXjL5wzVJGuI",
  authDomain: "react-netflix-clone-5174e.firebaseapp.com",
  projectId: "react-netflix-clone-5174e",
  storageBucket: "react-netflix-clone-5174e.appspot.com",
  messagingSenderId: "75145876590",
  appId: "1:75145876590:web:69110c56e0ebf6deaa427f",
  measurementId: "G-4PR2WBHZ3Y"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);