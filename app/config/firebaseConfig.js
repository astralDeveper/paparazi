import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuK2kKwLq7FjR_MlXEOcfJEZeUFXPgAnU",
  authDomain: "paparazi-64866.firebaseapp.com",
  projectId: "paparazi-64866",
  storageBucket: "paparazi-64866.appspot.com",
  messagingSenderId: "266405684684",
  appId: "1:266405684684:web:4c2a114a4872986d0b6969",
  measurementId: "G-8Q51X8PQRN"
};

const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export default app