import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEbSJRcstvigQt6xL18MT1ggheQdaqw6A",
    authDomain: "olx-clone-15126.firebaseapp.com",
    projectId: "olx-clone-15126",
    storageBucket: "olx-clone-15126.appspot.com",
    messagingSenderId: "816923307854",
    appId: "1:816923307854:web:05c3f4dac6aa78aeb6f81f",
    measurementId: "G-RW8KYMW8W2"
  };

  export default firebase.initializeApp(firebaseConfig)