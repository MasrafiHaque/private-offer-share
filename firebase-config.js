// ============================================================
//  Firebase Configuration
//  Replace these values with YOUR Firebase project credentials
// ============================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Cloudinary Configuration
const CLOUDINARY_CONFIG = {
  cloudName: "YOUR_CLOUD_NAME",
  uploadPreset: "YOUR_UPLOAD_PRESET"  // unsigned upload preset
};

// Telegram Channel Link
const TELEGRAM_LINK = "https://t.me/YOUR_CHANNEL";

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
