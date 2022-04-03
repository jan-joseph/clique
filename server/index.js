const express = require('express');
const firebase = require('firebase');
const cors = require('cors');
require('dotenv').config();

const {
  readFromCollection,
  writeToDb,
} = require('./firebase/firestoreReadWrite');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

app.get('/', async (req, res) => {
  try {
    const profiles = await readFromCollection('profiles', db);
    res.json({ profiles });
  } catch (err) {
    console.log(err);
  }
});

app.post('/user', async (req, res) => {
  try {
    const response = await writeToDb(req.body, db, 'profiles');
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log('Server running on PORT:' + PORT));
