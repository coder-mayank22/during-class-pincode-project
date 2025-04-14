// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnBGCzJ8MFdkLOTcEeBWGpvcXqakrLUx4",
    authDomain: "pincode-validation-app.firebaseapp.com",
    projectId: "pincode-validation-app",
    storageBucket: "pincode-validation-app.firebasestorage.app",
    messagingSenderId: "310458333625",
    appId: "1:310458333625:web:d52074c725841e3ec31e68",
    measurementId: "G-29XE5Q9Q04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ Add this line

// Submit button event
const submit = document.getElementById("submit");
submit.addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Logged In successfully!");
            window.location.href = "index.html"; 

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
