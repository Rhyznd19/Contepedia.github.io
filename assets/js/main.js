const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("signin");
// const loginErrorMsg = document.getElementById("login-error-msg");

document.getElementById("username").value = "";
document.getElementById("password").value = "";

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "admin" && password === "admin") {
    alert("You have successfully logged in.");
    window.location.href = "index.html";
  } else {
    // loginErrorMsg.style.opacity = 1;
    alert("Wrong username or password");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    location.reload();
  }
});
