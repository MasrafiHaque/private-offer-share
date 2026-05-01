// ============================================================
//  Firebase Configuration
//  Replace these values with YOUR Firebase project credentials
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyClg_colIw3qLzE3DefSeEJP98i37kI-dI",
  authDomain: "rivate-offer-share.firebaseapp.com",
  projectId: "rivate-offer-share",
  storageBucket: "rivate-offer-share.firebasestorage.app",
  messagingSenderId: "485885612132",
  appId: "1:485885612132:web:cefc9d9b88c0dc01544f71",
  measurementId: "G-KWNSXRW4CB"
};

// Cloudinary Configuration
const CLOUDINARY_CONFIG = {
  cloudName: "YOUR_CLOUD_NAME",
  uploadPreset: "YOUR_UPLOAD_PRESET"  // unsigned upload preset
};

// Telegram Channel Link
const TELEGRAM_LINK = "https://t.me/+RUCXh7X3MPRiYWVl";

// Admin UID — set this to your Firebase Auth UID after first login
// Go to Firebase Console → Authentication → Users → copy your UID
const ADMIN_UID = "YOUR_ADMIN_UID_HERE";

// ============================================================
//  Firebase Initialization (modular compat)
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, CLOUDINARY_CONFIG, TELEGRAM_LINK, ADMIN_UID };
