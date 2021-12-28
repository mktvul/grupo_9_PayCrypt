window.addEventListener("load", function () {
  document.getElementById("form").onsubmit = (e) => {
    let errors = {};

    if (document.getElementById("name").value == "") {
      document.getElementById("name").style.border = "solid 2px #db3236";
      errors.name = "Completá este dato";
    }

    if (document.getElementById("lastName").value == "") {
      document.getElementById("lastName").style.border = "solid 2px #db3236";
      errors.lastName = "Completá este dato";
    }

    if (document.getElementById("dni").value == "") {
      document.getElementById("dni").style.border = "solid 2px #db3236";
      errors.dni = "Completá este dato";
    }

    if (document.getElementById("location").value == "") {
      document.getElementById("location").style.border = "solid 2px #db3236";
      errors.location = "Completá este dato";
    }

    if (document.getElementById("email").value == "") {
      document.getElementById("email").style.border = "solid 2px #db3236";
      errors.email = "Completá este dato";
    }

    if (document.getElementById("password").value == "") {
      document.getElementById("password").style.border = "solid 2px #db3236";
      errors.password = "Completá este dato";
    }

    if (
      document.getElementById("passwordConfirm").value == "" ||
      document.getElementById("passwordConfirm").value !=
        document.getElementById("password").value
    ) {
      document.getElementById("passwordConfirm").style.border =
        "solid 2px #db3236";
      errors.passwordConfirm =
        "Completá este dato con el mismo del campo anterior";
    }

    if (document.getElementById("image").value == "") {
      document.getElementById("form-button-image").style.border =
        "solid 2px #db3236";
      document.getElementById("form-button-image").style.color = "#db3236";
      errors.image = "Subí una imagen";
    }

    if (Object.keys(errors).length >= 1) {
      e.preventDefault();
      document.querySelector(".name").innerText = errors.name
        ? errors.name
        : "";
      document.querySelector(".lastName").innerText = errors.lastName
        ? errors.lastName
        : "";
      document.querySelector(".dni").innerText = errors.dni ? errors.dni : "";
      document.querySelector(".location").innerText = errors.location
        ? errors.location
        : "";
      document.querySelector(".email").innerText = errors.email
        ? errors.email
        : "";
      document.querySelector(".password").innerText = errors.password
        ? errors.password
        : "";
      document.querySelector(".passwordConfirm").innerText =
        errors.passwordConfirm ? errors.passwordConfirm : "";
      document.querySelector(".image").innerText = errors.image
        ? errors.image
        : "";
    }
  };

  document.getElementById("name").onclick = function () {
    this.style.border = "";
  };

  document.getElementById("lastName").onclick = function () {
    this.style.border = "";
  };

  document.getElementById("dni").onclick = function () {
    this.style.border = "";
  };

  document.getElementById("location").onclick = function () {
    this.style.border = "";
  };

  document.getElementById("email").onclick = function () {
    this.style.border = "";
  };

  document.getElementById("password").onclick = function () {
    this.style.border = "";
  };

  document.getElementById("passwordConfirm").onclick = function () {
    this.style.border = "";
  };

  document.getElementById("form-button-image").onclick = function () {
    this.style.border = "";
    this.style.color = "";
  };

  document.getElementById("password").oninput = function () {
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
});
