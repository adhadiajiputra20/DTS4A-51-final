// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU-H-kX6y9h_4WlaJc3GJDnqt0W7jDIJI",
  authDomain: "dts4a-51-final.firebaseapp.com",
  projectId: "dts4a-51-final",
  storageBucket: "dts4a-51-final.appspot.com",
  messagingSenderId: "93468621838",
  appId: "1:93468621838:web:36bc29906d90368e86105f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const registerNewUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const signOutCurrentUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export { auth, registerNewUser, signInUser, signOutCurrentUser };
