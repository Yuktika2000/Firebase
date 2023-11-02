import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeM3OqKMXg_Knjzjy_kk7hGbGcphxYtdY",
  authDomain: "fir-user-reg-auth-c71e0.firebaseapp.com",
  projectId: "fir-user-reg-auth-c71e0",
  storageBucket: "fir-user-reg-auth-c71e0.appspot.com",
  messagingSenderId: "420755532910",
  appId: "1:420755532910:web:5669d75533f8e0af790a7f",
  measurementId: "G-FR41DXQGXH",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };
