import { storage, database } from "../../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const projectsCollection = collection(database, "projects");

interface dataProps {
  title: string;
  //thumbnail: File;
  description: string;
  //skills: string[];
  urlProject: string;
}

export async function addProject(data: dataProps) {
  const { title, description, urlProject } = data;

  try {
    console.log(data);
    await addDoc(projectsCollection, { title, description, urlProject });
    console.log("Datos enviados correctamente");
  } catch (error: any) {
    console.error("Error al enviar datos:", error.message);
  }
}
