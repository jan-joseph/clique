import {
  collection,
  Firestore,
  addDoc,
  getDocs,
  Timestamp,
  CollectionReference,
} from 'firebase/firestore';
import { useRecoilValue } from 'recoil';
import { db } from './initFirebase';

interface profile {
	id: string;
	interests: string[];
	status: string;
	timeStamp: Object;
}

async function writeToDb(profile:profile) {  
  try {
    const response = await addDoc(collection(db, 'interests'),profile);
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
