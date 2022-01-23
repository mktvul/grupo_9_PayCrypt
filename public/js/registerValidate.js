window.addEventListener("load", function () {
  // Regex for email validation
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  // Inputs
  let form = document.getElementById("form");
  let name = document.getElementById("name");
  let lastName = document.getElementById("lastName");
  let dni = document.getElementById("dni");
  let location = document.getElementById("location");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let passwordConfirm = document.getElementById("passwordConfirm");
  let image = document.getElementById("image");

  // Buttons
  let btnImage = document.getElementById("form-button-image-label");
  let btnCheckbox = document.getElementById("form-button-checkbox-input");
  let btnState = document.getElementById("form-button-state");
  let btnEnable = document.getElementById("form-button-enable");

  // Errors
  let nameError = document.querySelector(".name");
  let lastNameError = document.querySelector(".lastName");
  let dniError = document.querySelector(".dni");
  let locationError = document.querySelector(".location");
  let emailError = document.querySelector(".email");
  let passwordError = document.querySelector(".password");
  let passwordConfirmError = document.querySelector(".passwordConfirm");
  let imageError = document.querySelector(".image");

  form.onsubmit = (e) => {
    let errors = {};

    if (name.value <= 2) {
      name.style.border = "solid 2px #db3236";
      errors.name = "Completá este dato con al menos 2 caracteres";
    } else {
      name.style.border = "solid 2px #0F9D58";
    }

    if (lastName.value == "") {
      lastName.style.border = "solid 2px #db3236";
      errors.lastName = "Completá este dato";
    } else {
      lastName.style.border = "solid 2px #0F9D58";
    }

    if (dni.value == "") {
      dni.style.border = "solid 2px #db3236";
      errors.dni = "Completá este dato";
    } else {
      dni.style.border = "solid 2px #0F9D58";
    }

    if (location.value == "") {
      location.style.border = "solid 2px #db3236";
      errors.location = "Completá este dato";
    } else {
      location.style.border = "solid 2px #0F9D58";
    }

    if (!regex.test(email.value)) {
      email.style.border = "solid 2px #db3236";
      errors.email = "Completá este dato";
    } else {
      email.style.border = "solid 2px #0F9D58";
    }

    if (password.value <= 8) {
      password.style.border = "solid 2px #db3236";
      errors.password = "Completá este dato con al menos 8 caracteres";
    } else {
      password.style.border = "solid 2px #0F9D58";
    }

    if (
      passwordConfirm.value == "" ||
      passwordConfirm.value != password.value
    ) {
      passwordConfirm.style.border = "solid 2px #db3236";
      errors.passwordConfirm =
        "Completá este dato con el mismo del campo anterior";
    }

    let validExtension = [".jpg", ".jpeg", ".png", ".gif"];
    let fileName = image.value.lastIndexOf(".");
    let fileExtension = image.value.substring(fileName);
    let isValid = validExtension.includes(fileExtension);

    if (image.value == "" || !isValid) {
      btnImage.style.border = "solid 2px #db3236";
      btnImage.style.color = "#db3236";
      errors.image = "Completá este dato con una imagen válida";
    } else {
      image.style.border = "solid 2px #0F9D58";
      btnImage.style.color = "#0F9D58";
    }

    if (Object.keys(errors).length >= 1) {
      e.preventDefault();
      nameError.innerText = errors.name ? errors.name : "";
      lastNameError.innerText = errors.lastName ? errors.lastName : "";
      dniError.innerText = errors.dni ? errors.dni : "";
      locationError.innerText = errors.location ? errors.location : "";
      emailError.innerText = errors.email ? errors.email : "";
      passwordError.innerText = errors.password ? errors.password : "";
      passwordConfirmError.innerText = errors.passwordConfirm
        ? errors.passwordConfirm
        : "";
      imageError.innerText = errors.image ? errors.image : "";
    }
  };

  name.onclick = function () {
    this.style.border = "";
  };

  lastName.onclick = function () {
    this.style.border = "";
  };

  dni.onclick = function () {
    this.style.border = "";
  };

  location.onclick = function () {
    this.style.border = "";
  };

  email.onclick = function () {
    this.style.border = "";
  };

  password.onclick = function () {
    this.style.border = "";
  };

  passwordConfirm.onclick = function () {
    this.style.border = "";
  };

  btnImage.onclick = function () {
    this.style.border = "";
    this.style.color = "";
  };

  password.oninput = function () {
    if (this.value.length > 11) {
      this.style.border = "solid 2px #3cba54";
    } else if (this.value.length > 8) {
      this.style.border = "solid 2px #f4c20d";
    } else if (this.value.length > 5) {
      this.style.border = "solid 2px #db3236";
    } else {
      this.style.border = "";
    }
  };

  btnState.disabled = true;

  btnCheckbox.onchange = function () {
    if (!btnCheckbox.checked) {
      btnState.disabled = true;
      btnEnable.classList.toggle("form-button-done");
    } else {
      btnState.disabled = false;
      btnEnable.classList.toggle("form-button-done");
    }
  };
});
