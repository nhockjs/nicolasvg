import { auth } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const createUser = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;

  let userAllRight: boolean;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: username });

    userAllRight = true;
    return { userAllRight };
  } catch (error: any) {
    const { code, message } = error;
    userAllRight = false;
    return { userAllRight, code, message };
  }
};
