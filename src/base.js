import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcBT-ZJRad1saZtL2HsLD21PPVoCp682c",
  authDomain: "chatbox-app-4dd9d.firebaseapp.com",
  databaseURL: "https://chatbox-app-4dd9d.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
