// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCvR2Fq3tmovzVKA3aS3Fpx8HPGqniCmyQ",
  authDomain: "bit-craft-e7008.firebaseapp.com",
  projectId: "bit-craft-e7008",
  storageBucket: "bit-craft-e7008.appspot.com",
  messagingSenderId: "557562805667",
  appId: "1:557562805667:web:4df7eebab525f63d6a2e16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
