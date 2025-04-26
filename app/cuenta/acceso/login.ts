import { auth } from "../../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  let userAllRight: boolean;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    userAllRight = true;
    return { userAllRight };
  } catch (error: any) {
    const { code, message } = error;
    userAllRight = false;
    return { userAllRight, code, message };
  }
};
