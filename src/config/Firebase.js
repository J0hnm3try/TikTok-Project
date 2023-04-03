import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDi7_AQqa3G5CVGqZwDyDU-mnb9Q4LVKX0",
  authDomain: "tiktok-clone-3e1ef.firebaseapp.com",
  projectId: "tiktok-clone-3e1ef",
  storageBucket: "tiktok-clone-3e1ef.appspot.com",
  messagingSenderId: "806125316557",
  appId: "1:806125316557:web:f3efd33f2a0c470b087c84"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db