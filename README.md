# DealZone — Daraz Affiliate Website
## Setup Guide (Step-by-Step)

---

## 📁 File Structure
```
daraz-affiliate/
├── index.html        ← Main store page (products listing)
├── auth.html         ← Login / Signup page
├── admin.html        ← Admin panel
├── style.css         ← All styles
├── firestore.rules   ← Firestore security rules
└── README.md         ← This file
```

---

## ⚙️ Step 1 — Firebase Setup

1. Go to https://console.firebase.google.com
2. Click **"Add Project"** → name it (e.g. "DealZone")
3. Enable **Google Analytics** (optional)

### Enable Authentication
- Firebase Console → **Authentication** → **Get Started**
- Enable: **Email/Password**
- *(Phone auth not needed — we simulate phone via email)*

### Create Firestore Database
- Firebase Console → **Firestore Database** → **Create database**
- Choose **Production mode**
- Select a region close to Bangladesh (e.g. `asia-south1`)

### Get Firebase Config
- Firebase Console → Project Settings (⚙️) → **Your apps**
- Click **"</>"** (Web)
- Register app → copy the `firebaseConfig` object

---

## 🔧 Step 2 — Add Your Config

Open these 3 files and replace the placeholder config:

**In `index.html`, `auth.html`, `admin.html` — find this block:**
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  ...
};
```
Replace with your actual Firebase config.

---

## ☁️ Step 3 — Cloudinary Setup

1. Go to https://cloudinary.com → Sign up (free)
2. Go to **Settings** → **Upload**
3. Scroll to **Upload presets** → **Add upload preset**
   - Signing mode: **Unsigned**
   - Save → copy the preset name
4. Copy your **Cloud name** from the Dashboard

**In `admin.html`, find:**
```javascript
const CLOUDINARY_CONFIG = {
  cloudName: "YOUR_CLOUD_NAME",
  uploadPreset: "YOUR_UPLOAD_PRESET"
};
```
Replace with your values.

---

## 👤 Step 4 — Get Your Admin UID

1. Deploy the site (or open locally)
2. Sign up / Login with your admin account
3. Go to Firebase Console → **Authentication** → **Users**
4. Copy your **User UID**

**In `admin.html` and `firestore.rules`, replace:**
```
YOUR_ADMIN_UID_HERE
```
With your actual UID.

---

## 🔒 Step 5 — Apply Firestore Rules

1. Open `firestore.rules`
2. Replace `YOUR_ADMIN_UID_HERE` with your UID
3. Go to Firebase Console → **Firestore** → **Rules**
4. Paste the contents of `firestore.rules`
5. Click **Publish**

---

## 📱 Step 6 — Telegram Channel Link

**In `index.html`, find:**
```javascript
const TELEGRAM_LINK = "https://t.me/YOUR_CHANNEL";
```
Replace `YOUR_CHANNEL` with your actual Telegram channel username.

---

## 🚀 Step 7 — Deploy to Netlify

1. Go to https://netlify.com → Sign in
2. Drag and drop the `daraz-affiliate/` folder
3. Your site is live!

---

## 🗂️ Firestore Collections

The app uses these collections:

| Collection | Purpose |
|------------|---------|
| `products` | All product listings |
| `users`    | Registered user data |

**Product document fields:**
```
title        - string  (Product name)
description  - string  (Short description)
price        - number  (Price in BDT)
category     - string  (e.g. "Electronics")
affiliateLink- string  (Full Daraz affiliate URL)
image        - string  (Cloudinary image URL)
createdAt    - timestamp
updatedAt    - timestamp
```

---

## 🛡️ Security Notes

- ✅ Only logged-in users can see products
- ✅ Only the admin UID can add/edit/delete products
- ✅ Cloudinary uses unsigned upload preset (safe for frontend)
- ✅ Phone login uses a fake email pattern (`ph880XXXXXXXXX@dealzone.app`)
- ✅ Session-based Telegram popup (not shown every page visit)

---

## 📞 Phone Login Note

Since Firebase free tier doesn't support OTP-free phone auth, this app uses a workaround:
- Phone number `01711111111` → stored as `ph880711111111@dealzone.app`
- The user sets their own password during signup
- Works perfectly for Bangladesh numbers

---

## ✏️ Customization

| Thing to Change | Where |
|-----------------|-------|
| Site name "DealZone" | `index.html`, `auth.html`, `admin.html` (search for "DealZone") |
| Telegram popup text | `index.html` → `.tg-popup` section |
| Colors | `style.css` → `:root` variables |
| Logo/Favicon | Add `<link rel="icon">` to each HTML file |
