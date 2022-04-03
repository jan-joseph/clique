const {
  collection,
  Firestore,
  addDoc,
  getDocs,
} = require('firebase/firestore');

async function writeToDb(profile, db, collectionName) {
  const profilesRef = db.collection(collectionName).doc(profile.id);
  try {
    const response = await profilesRef.set(profile);
  } catch (error) {
    console.log(error);
  }
}
async function readFromCollection(collectionName, db) {
  // Accessing the Collection Reference
  const profilesRef = db.collection(collectionName);
  const querySnapshot = await profilesRef.get();
  const result = [];
  querySnapshot.forEach((doc) => {
    const data = { id: doc.id, data: doc.data() };
    result.push(data);
  });
  console.log(result);
  return result;
}
module.exports = { writeToDb, readFromCollection };
