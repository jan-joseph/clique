import { collection, Firestore, addDoc, Timestamp, CollectionReference } from 'firebase/firestore';
import { db } from '../firebase/initFirebase';
import { doc, setDoc } from 'firebase/firestore';

// Add a new document in collection "cities"
// async function writeToDb(interest: string) {
//   try {
//     await setDoc(doc(db, 'cities', 'LA'), {
//       name: 'Los Angeles',
//       state: 'CA',
//       country: 'USA',
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

async function writeToDb(interest: string) {
  try {
    const response = await addDoc(collection(db, 'interests'), {
      interest,
      created: Timestamp.now(),
    });
    console.log('successful' + response);
  } catch (error) {
    console.log(error);
  }
}

export { writeToDb };
