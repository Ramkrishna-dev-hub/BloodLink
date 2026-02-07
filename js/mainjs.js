import { registerDonor, loginUser } from "./auth.js";
console.log("mainjs.js loaded");

// USER REGISTRATION
const regForm = document.getElementById("userRegisterForm");

if (regForm) {
  regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      weight: document.getElementById("weight").value,
      height: document.getElementById("height").value,
      password: document.getElementById("password").value,
    };

    registerDonor(data);
  });
}


// USER LOGIN
const loginForm = document.getElementById("userLoginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    loginUser(email, password);
  });
}

