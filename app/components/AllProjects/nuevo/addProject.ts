import { database } from "../../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export interface dataProps {
  title: string;
  id: string;
  thumbnail?: string;
  description: string;
  skills: string[];
  urlProject: string;
}

export async function addProject(data: dataProps) {
  const { id } = data;
  console.log(data);
  //const projectRef = await addDoc(collection(database, "projects"), data);
  const projectRef = await doc(database, "projects", id);
  await setDoc(projectRef, data);
  console.log("Datos enviados correctamente");
}
