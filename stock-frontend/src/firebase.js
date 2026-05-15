// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config (from console)
const firebaseConfig = {
 apiKey: "AIzaSyB8qm94riOOyRRSYIBZd8UVazyk4dSdQvE",
  authDomain: "stock-app-49eff.firebaseapp.com",
  projectId: "stock-app-49eff",
 appId: "1:844446204638:web:f560e0806d64b5d705f84f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// ✅ FIX: Export provider correctly
export const provider = new GoogleAuthProvider();