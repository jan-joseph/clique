import {
  collection,
  Firestore,
  addDoc,
  getDocs,
  Timestamp,
  CollectionReference,
} from 'firebase/firestore';
import { db } from './initFirebase';
async function writeToDb(interest: string) {
  try {
    const response = await addDoc(collection(db, 'interests'), {
      interest,
      created: Timestamp.now(),
      status: 'searching',
    });
  } catch (error) {
    console.log(error);
  }
}
async function readFromCollection(collectionName: string) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result: any = [];
  querySnapshot.forEach((doc) => {
    const data = { id: doc.id, data: doc.data() };
    result.push(data);
  });
  console.log(result);
  return result;
}
export { writeToDb, readFromCollection };
