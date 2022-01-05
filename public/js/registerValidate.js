window.addEventListener("load", function () {
  // Variables by Id
  let formById = document.getElementById("form");
  let nameById = document.getElementById("name");
  let lastNameById = document.getElementById("lastName");
  let dniById = document.getElementById("dni");
  let locationById = document.getElementById("location");
  let emailById = document.getElementById("email");
  let passwordById = document.getElementById("password");
  let passwordConfirmById = document.getElementById("passwordConfirm");
  let imageById = document.getElementById("image");
  let btnImageById = document.getElementById("form-button-image");
  let btnCheckbox = document.getElementById("form-button-checkbox-input");
  let btnSate = document.getElementById("form-button-state");
  let btnEnable = document.getElementById("form-button-enable");

  // Variables by Class
  let nameByClass = document.querySelector(".name");
  let lastNameByClass = document.querySelector(".lastName");
  let dniByClass = document.querySelector(".dni");
  let locationByClass = document.querySelector(".location");
  let emailByClass = document.querySelector(".email");
  let passwordByClass = document.querySelector(".password");
  let passwordConfirmByClass = document.querySelector(".passwordConfirm");
  let imageByClass = document.querySelector(".image");

  formById.onsubmit = (e) => {
    let errors = {};

    if (nameById.value <= 2) {
      nameById.style.border = "solid 2px #db3236";
      errors.name = "Completá este dato con al menos 2 caracteres";
    }

    if (lastNameById.value == "") {
      lastNameById.style.border = "solid 2px #db3236";
      errors.lastName = "Completá este dato";
    }

    if (dniById.value == "") {
      dniById.style.border = "solid 2px #db3236";
      errors.dni = "Completá este dato";
    }

    if (locationById.value == "") {
      locationById.style.border = "solid 2px #db3236";
      errors.location = "Completá este dato";
    }

    if (emailById.value == "") {
      emailById.style.border = "solid 2px #db3236";
      errors.email = "Completá este dato";
    }

    if (passwordById.value <= 8) {
      passwordById.style.border = "solid 2px #db3236";
      errors.password = "Completá este dato con al menos 8 caracteres";
    }

    if (
      passwordConfirmById.value == "" ||
      passwordConfirmById.value != password.value
    ) {
      passwordConfirmById.style.border = "solid 2px #db3236";
      errors.passwordConfirm =
        "Completá este dato con el mismo del campo anterior";
    }

    if (imageById.value == "") {
      btnImageById.style.border = "solid 2px #db3236";
      btnImageById.style.color = "#db3236";
      errors.image = "Subí una imagen";
    }

    if (Object.keys(errors).length >= 1) {
      e.preventDefault();
      nameByClass.innerText = errors.name ? errors.name : "";
      lastNameByClass.innerText = errors.lastName ? errors.lastName : "";
      dniByClass.innerText = errors.dni ? errors.dni : "";
      locationByClass.innerText = errors.location ? errors.location : "";
      emailByClass.innerText = errors.email ? errors.email : "";
      passwordByClass.innerText = errors.password ? errors.password : "";
      passwordConfirmByClass.innerText = errors.passwordConfirm
        ? errors.passwordConfirm
        : "";
      imageByClass.innerText = errors.image ? errors.image : "";
    }
  };

  nameById.onclick = function () {
    this.style.border = "";
  };

  lastNameById.onclick = function () {
    this.style.border = "";
  };

  dniById.onclick = function () {
    this.style.border = "";
  };

  locationById.onclick = function () {
    this.style.border = "";
  };

  emailById.onclick = function () {
    this.style.border = "";
  };

  passwordById.onclick = function () {
    this.style.border = "";
  };

  passwordConfirmById.onclick = function () {
    this.style.border = "";
  };

  btnImageById.onclick = function () {
    this.style.border = "";
    this.style.color = "";
  };

  passwordById.oninput = function () {
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

  btnSate.disabled = true;

  btnCheckbox.onchange = function () {
    if (!btnCheckbox.checked) {
      btnSate.disabled = true;
    } else {
      btnSate.disabled = false;
      btnEnable.classList.toggle("form-button-done");
    }
  };
});
