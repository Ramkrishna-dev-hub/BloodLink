import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmACoYCjXqENIbPhZPynZl8DGTIZGzQgI",
  authDomain: "bloodlink-4490e.firebaseapp.com",
  projectId: "bloodlink-4490e",
  storageBucket: "bloodlink-4490e.firebasestorage.app",
  messagingSenderId: "980605190675",
  appId: "1:980605190675:web:81fa0572d4b9ca546b35e6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);