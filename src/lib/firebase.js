import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env,
  authDomain: "chat-app-badf4.firebaseapp.com",
  projectId: "chat-app-badf4",
  storageBucket: "chat-app-badf4.appspot.com",
  messagingSenderId: "261934652646",
  appId: "1:261934652646:web:9238a482abb5d74c3cef27",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
