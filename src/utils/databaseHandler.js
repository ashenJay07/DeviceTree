import { getFirestoreDB } from "../../firebase/firebaseConfig";
const { collection, addDoc } = require("firebase/firestore");

const db = getFirestoreDB();

const addCollection = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "resources"), data);
    console.log("Document added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export { addCollection };
