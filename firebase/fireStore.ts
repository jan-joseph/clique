import { collection, Firestore, addDoc, Timestamp, CollectionReference } from 'firebase/firestore';
import { db } from '../firebase/initFirebase';
import { doc, setDoc } from 'firebase/firestore';

async function writeToDb(interest: string) {
  try {
    const response = await addDoc(collection(db, 'interests'), {
      interest,
      created: Timestamp.now(),
      status: "searching"
    });
  } catch (error) {
    console.log(error);
  }
}

export { writeToDb };
