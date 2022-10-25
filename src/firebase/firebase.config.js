// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOVkKJd5FopqKJh75eOBPvryNKY2dGNr0",
  authDomain: "course-mania-f8a8b.firebaseapp.com",
  projectId: "course-mania-f8a8b",
  storageBucket: "course-mania-f8a8b.appspot.com",
  messagingSenderId: "614536381559",
  appId: "1:614536381559:web:c1a02c8b962b481e547272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;