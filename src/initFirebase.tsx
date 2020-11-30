import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAZ_agtVWvhSn6_cUC5-wrsTi1POvuVvf0",
  authDomain: "temperat-fea82.firebaseapp.com",
  databaseURL: "https://temperat-fea82.firebaseio.com",
  projectId: "temperat-fea82",
  storageBucket: "temperat-fea82.appspot.com",
  messagingSenderId: "811871312856",
  appId: "1:811871312856:web:c32ab56d3708d11a8f30ad",
  measurementId: "G-3J7CMYVZT4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
