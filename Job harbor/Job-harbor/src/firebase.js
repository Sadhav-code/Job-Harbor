// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA552GXLUZGCUDVMbsFMiGU57sRAAqciso",
  authDomain: "job-harbor.fire baseapp.com",
  projectId: "job-harbor",
  storageBucket: "job-harbor.appspot.com",
  messagingSenderId: "843820250250",
  appId: "1:843820250250:web:0cf90164c2b891ab5fe973",
  measurementId: "G-D231Z20ELG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)