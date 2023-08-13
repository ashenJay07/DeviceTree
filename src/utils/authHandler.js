import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirebaseAuth, getFirestoreDB } from "../../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const registerUser = async ({ email, username, password }) => {
  const auth = getFirebaseAuth();
  const firestore = getFirestoreDB();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    await sendEmailVerification(user);

    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef, {
      email,
      username,
    });
  } catch (error) {
    console.log(error);
  }
};

const userLogin = async ({ email, password }) => {
  const auth = getFirebaseAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = auth.currentUser;

    if (user && user.emailVerified) {
      return true;
    } else {
      return "User isn't validated yet, Please check your email";
    }
  } catch (error) {
    switch (error.code) {
      case "auth/user-not-found":
        return "User not found";
      case "auth/wrong-password":
        return "Invalid password";
      default:
        return "Unknown error: " + error.message;
    }
  }
};

export { registerUser, userLogin };
