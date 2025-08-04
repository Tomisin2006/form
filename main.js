document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

 
  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;
  let passwordmain = "Tomis!n1";
  let emailmain = "tomi@healthstation.ng"
  
  if(email == emailmain && password == passwordmain) {
    window.location.href = "welcome.html";
  }
  else {
    if (email !== emailmain) {
      emailError.textContent = "Email is incorrect.";
    }
    if (password !== passwordmain) {
      passwordError.textContent = "Password is incorrect.";
    }
  }
});


 
