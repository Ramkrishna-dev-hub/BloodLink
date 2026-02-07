import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc, getDoc }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function registerDonor(data) {
  const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
  const uid = userCred.user.uid;

  await setDoc(doc(db, "users", uid), { role: "donor", ...data });
  window.location.href = "dashboard-donor.html";
}

export async function registerHospital(data) {
  const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
  const uid = userCred.user.uid;

  await setDoc(doc(db, "users", uid), { role: "hospital", ...data });
  window.location.href = "dashboard-hospital.html";
}

export async function loginUser(email, password) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    const snap = await getDoc(doc(db, "users", uid));

    if (!snap.exists()) {
      alert("User data not found. Please register first.");
      return;
    }

    const role = snap.data().role;

    if (role === "donor") {
      window.location.href = "dashboard-donor.html";
    } else if (role === "hospital") {
      window.location.href = "dashboard-hospital.html";
    }

  } catch (error) {
  const errorBox = document.getElementById("loginError");
  if (!errorBox) return;

  errorBox.style.display = "block";
  errorBox.classList.remove("fade-out"); // reset animation

  if (error.code === "auth/invalid-email") {
    errorBox.textContent = "Invalid email format.";
  }
  else if (error.code === "auth/too-many-requests") {
    errorBox.textContent = "Too many attempts. Try again later.";
  }
  else if (error.code === "auth/network-request-failed") {
    errorBox.textContent = "Network error. Check your connection.";
  }
  else {
    errorBox.textContent = "Invalid email or password.";
  }

  // fade out after 5 seconds
  setTimeout(() => {
    errorBox.classList.add("fade-out");

    // hide after animation
    setTimeout(() => {
      errorBox.style.display = "none";
      errorBox.classList.remove("fade-out");
    }, 500);

  }, 5000);
}


}


