import { atom } from "recoil";
import { v4 as uuidv4 } from 'uuid'
const profileState = atom({
	key: "profileState",
	default: {
		id: uuidv4(),
		interests: [],
		timeStamp : {

		},
		status: "new"
	},
});

export default profileState;
