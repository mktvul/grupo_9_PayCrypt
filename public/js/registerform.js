window.addEventListener("load", function () {
  //document.getElementById("name").focus();

  document.getElementsByTagName("input").onfocus = function () {
    this.style.border = "solid 1px #27346a";
    this.style.filter = "drop-shadow(0 0 0.1rem #27346a)";
  };

  document.getElementById("password").oninput = function () {
    if (this.value.length > 11) {
      this.style.border = "solid 1px #3cba54";
      this.style.filter = "drop-shadow(0 0 0.1rem #3cba54)";
      
    } else if (this.value.length > 8) {
      this.style.border = "solid 1px #f4c20d";
      this.style.filter = "drop-shadow(0 0 0.1rem #f4c20d)";
    } else if (this.value.length > 5) {
      this.style.border = "solid 1px #db3236";
      this.style.filter = "drop-shadow(0 0 0.1rem #db3236)";
    } else {
      this.style.border = "";
      this.style.filter = "";
    }
  };
});
