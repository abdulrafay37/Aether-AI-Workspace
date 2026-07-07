import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlpLiXstXEuqy05rJSoAg5So3tw04LRWY",
  authDomain: "aether-ai-75d14.firebaseapp.com",
  projectId: "aether-ai-75d14",
  storageBucket: "aether-ai-75d14.firebasestorage.app",
  messagingSenderId: "1022387972633",
  appId: "1:1022387972633:web:457cf7e3a978b7fec6d888"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
