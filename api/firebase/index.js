import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDIr0L-j2URb6ZISxVGSbDYXkva3WcN8vM",
    authDomain: "chef-60e70.firebaseapp.com",
    projectId: "chef-60e70",
    storageBucket: "chef-60e70.appspot.com",
    messagingSenderId: "569081045156",
    appId: "1:569081045156:web:a73db1062d39153c744631",
    measurementId: "G-7EK78RMN7B"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

export default App