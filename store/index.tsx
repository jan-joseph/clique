import { atom } from "recoil";

const inputFormValueState = atom({
	key: "inputFormValueState",
	default: "new guy",
});

export default inputFormValueState;
