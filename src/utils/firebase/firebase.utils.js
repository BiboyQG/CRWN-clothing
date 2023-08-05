import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaVBy7LXeVwmcb4ib3JPFe95DAHOXUtZ8",
  authDomain: "crwn-clothing-db-233cd.firebaseapp.com",
  projectId: "crwn-clothing-db-233cd",
  storageBucket: "crwn-clothing-db-233cd.appspot.com",
  messagingSenderId: "587623043858",
  appId: "1:587623043858:web:ccf73909e3b016f23e19cb",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithGooglePopup(auth, provider);
