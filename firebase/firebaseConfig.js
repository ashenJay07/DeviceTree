// src/firebaseConfig.js
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDIT1R1mjv0T3jq-FwIFHn6Bwdt9Dd-O0o",
    authDomain: "devicetree-e60f9.firebaseapp.com",
    databaseURL: "https://devicetree-e60f9-default-rtdb.firebaseio.com",
    projectId: "devicetree-e60f9",
    storageBucket: "devicetree-e60f9.appspot.com",
    messagingSenderId: "419553765477",
    appId: "1:419553765477:web:3870cc4e2e7b4f5d923e8c"
  };

const app = initializeApp(firebaseConfig);

export default app;
