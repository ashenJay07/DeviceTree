import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getFirestoreDB } from "../../firebase/firebaseConfig";
import { get } from "firebase/database";

const createNewLink = async (data) => {
  try {
    const db = getFirestoreDB();

    // Reference the document with the custom ID
    const customDocRef = doc(db, "document-list", "asbadyfi7tasgdf5");

    // Get the document snapshot
    const docSnapshot = await getDoc(customDocRef);

    if (docSnapshot.exists()) {
      // Document exists, update it
      await updateDoc(customDocRef, {
        fields: arrayUnion(data),
      });
    } else {
      // Document doesn't exist, create it with initial data
      await setDoc(customDocRef, { fields: [data] });
    }
  } catch (error) {
    console.error(error);
  }
};

export { createNewLink };
