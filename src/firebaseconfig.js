import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const firebaseconfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APPID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBwKn7Bi2k2qjDbn18YuD172HWxl9KSGPY",
  authDomain: "irehv-b4c29.firebaseapp.com",
  projectId: "irehv-b4c29",
  storageBucket: "irehv-b4c29.appspot.com",
  messagingSenderId: "155266417769",
  appId: "1:155266417769:web:d0de054110fadf1e70cef8",
  measurementId: "G-KKW970VETL",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
// allow read,write: if	request.auth	!=	null	&&	request.auth.token.email_verified;
