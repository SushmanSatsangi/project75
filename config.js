import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAc_hTArFEoN2EGQtql_Yi-ptTzGiwVsVc",
  authDomain: "e-ride-fc624.firebaseapp.com",
  projectId: "e-ride-fc624",
  storageBucket: "e-ride-fc624.appspot.com",
  messagingSenderId: "844620988965",
  appId: "1:844620988965:web:d06f340f11926f91da35cc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
