import { auth } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUser = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  let userAllRight: boolean;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    userAllRight = true;
    return { userAllRight };
  } catch (error: any) {
    const { code, message } = error;
    userAllRight = false;
    return { userAllRight, code, message };
  }
};

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
