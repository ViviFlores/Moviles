import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAg5BJCXj98TQAMDhiz-4T3rU5KYFqiy60",
  authDomain: "tenedores-e5efe.firebaseapp.com",
  projectId: "tenedores-e5efe",
  storageBucket: "tenedores-e5efe.appspot.com",
  messagingSenderId: "491312089702",
  appId: "1:491312089702:web:dcef1ff066030de69b7ba7"
};

export const initFirebase = initializeApp(firebaseConfig);