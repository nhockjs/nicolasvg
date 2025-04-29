import { storage } from "../../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function saveAndConvertThumbnail(thumbnailFile: File, id: string) {
  const thumbnailPath = `projects/${id}`;
  const bucketRef = ref(storage, thumbnailPath);
  await uploadBytes(bucketRef, thumbnailFile);

  const thumbnailUrl = await getDownloadURL(bucketRef);
  console.log(thumbnailUrl);

  return thumbnailUrl;
}
