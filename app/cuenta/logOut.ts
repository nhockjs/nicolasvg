import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

export const logOutUser = async () => {
  signOut(auth);
};
