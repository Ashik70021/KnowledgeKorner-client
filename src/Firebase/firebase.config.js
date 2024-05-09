// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1hRB7zVJYSVGxVtRN7snhXlLWfxoKxA",
  authDomain: "knowledge-korner.firebaseapp.com",
  projectId: "knowledge-korner",
  storageBucket: "knowledge-korner.appspot.com",
  messagingSenderId: "257917079517",
  appId: "1:257917079517:web:eafb061d8132ebd5aaf034"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);