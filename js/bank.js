document.getElementById("login-button").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.Value;

  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.Value;

  if (userEmail == "faruk@gmail.com" && userPassword == "1234") {
    window.location.href = "banking.html";
  }
});
