import {
	collection,
	Firestore,
	addDoc,
	Timestamp,
	CollectionReference,
} from "firebase/firestore";

interface Props {
	firestore: Firestore;
}
export default function WriteToFirestore({ firestore }: Props) {
	async function writeData() {
		console.log("Click");
		try {
			const response = await addDoc(
				collection(firestore, "interests"),
				{
					interest: "Jojo",
					created: Timestamp.now(),
				}
			);
			console.log("successfull" + response);
		} catch (error) {
			console.log(error);
		}
	}
	return <button onClick={writeData}>Write</button>;
}
