import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwZYzBaNmd0ipciHJDza3sKkZtmCxmIVw",
  authDomain: "linkedin-clone-cdf80.firebaseapp.com",
  projectId: "linkedin-clone-cdf80",
  storageBucket: "linkedin-clone-cdf80.appspot.com",
  messagingSenderId: "174923844725",
  appId: "1:174923844725:web:878eda783c7687fc32fc3c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
