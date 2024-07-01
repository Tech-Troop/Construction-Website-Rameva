import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAhH7fg2bBH9Y8QN5FcjKnDCuaKJGaFnZk",
    authDomain: "rameva-construction.firebaseapp.com",
    projectId: "rameva-construction",
    storageBucket: "rameva-construction.appspot.com",
    messagingSenderId: "593211160796",
    appId: "1:593211160796:web:25d78d7b8816d213d61c19",
    measurementId: "G-JS6522JFQK"
  };



  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)