window.addEventListener("load", function () {
    document.getElementById("form").onsubmit = (e) => {
      let errors = {};
  
      if (document.getElementById("email").value == "") {
        document.getElementById("email").style.border = "solid 2px #db3236";
        errors.email = "Completá este dato";
      }
  
      if (document.getElementById("password").value == "") {
        document.getElementById("password").style.border = "solid 2px #db3236";
        errors.password = "Completá este dato";
      }
  
      if (Object.keys(errors).length >= 1) {
        e.preventDefault();
        document.querySelector(".email").innerText = errors.email
          ? errors.email
          : "";
        document.querySelector(".password").innerText = errors.password
          ? errors.password
          : "";
      }
    };
    document.getElementById("email").onclick = function () {
      this.style.border = "";
    };
  
    document.getElementById("password").onclick = function () {
      this.style.border = "";
    };
  });
  