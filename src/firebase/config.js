// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIyWSIOG66u8GoJIdhRrLNiipTJQ1wfD8",
  authDomain: "lamonoco-1c31e.firebaseapp.com",
  projectId: "lamonoco-1c31e",
  storageBucket: "lamonoco-1c31e.appspot.com",
  messagingSenderId: "253836276245",
  appId: "1:253836276245:web:44e2a613cb05003b86541c",
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);
export { db };
