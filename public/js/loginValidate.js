window.addEventListener("load", function () {
  // Regex for email validation
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  // Inputs
  let form = document.getElementById("form");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  // Errors
  let emailError = document.querySelector(".email");
  let passwordError = document.querySelector(".password");

  form.onsubmit = (e) => {
    let errors = {};

    if (!regex.test(email.value)) {
      email.style.border = "solid 2px #db3236";
      errors.email = "Completá este dato";
    }

    if (password.value <= 8) {
      password.style.border = "solid 2px #db3236";
      errors.password = "Completá este dato";
    }

    if (Object.keys(errors).length >= 1) {
      e.preventDefault();
      emailError.innerText = errors.email ? errors.email : "";
      passwordError.innerText = errors.password ? errors.password : "";
    }
  };
  email.onclick = function () {
    this.style.border = "";
  };

  password.onclick = function () {
    this.style.border = "";
  };
});
