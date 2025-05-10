import { database } from "@/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { dataProps } from "./nuevo/addProject";

export async function getAllProjects() {
  const allProjectsRef = collection(database, "projects");
  const allProjectsSnapshot = await getDocs(allProjectsRef);
  const projects: dataProps[] = allProjectsSnapshot.docs.map((doc) => ({
    title: doc.data().title,
    id: doc.data().id,
    thumbnail: doc.data().thumbnailUrl,
    description: doc.data().description,
    skills: doc.data().skills,
    urlProject: doc.data().urlProject,
  }));
  return projects;
}
