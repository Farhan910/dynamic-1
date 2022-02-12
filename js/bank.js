document.getElementById("login-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;

  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  if (userEmail == "faruk@gmail.com" && userPassword == "1234") {
    window.location.href = "banking.html";
  }
});
