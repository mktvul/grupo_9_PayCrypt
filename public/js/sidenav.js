function openNav() {
  document.getElementById("header-menu-content-id").style.animation = "expand 0.3s forwards";
  //Overlay
  document.getElementById("header-menu-overlay-id").style.display = "block";
  document.getElementById("header-menu-overlay-id").style.animation = "show 0.3s";

  if (window.location.pathname == "/") {
    document.getElementById("header-sidenav-options-home").classList.add("header-sidenav-option-selected");
  } else if (window.location.pathname.includes("/user")){
    document.getElementById("header-sidenav-options-user").classList.add("header-sidenav-option-selected");
  } else if (window.location.pathname == "") {
    document.getElementById("").classList.add("header-sidenav-option-selected");
  } else if (window.location.pathname == "") {
    document.getElementById("").classList.add("header-sidenav-option-selected");
  } else if (window.location.pathname == "") {
    document.getElementById("").classList.add("header-sidenav-option-selected");
  } else if (window.location.pathname == "/product/create") {
    document.getElementById("header-sidenav-options-create").classList.add("header-sidenav-option-selected");
  }
}

function closeNav() {
  document.getElementById("header-menu-content-id").style.animation = "collapse 0.3s forwards";
  //Overlay
  document.getElementById("header-menu-overlay-id").style.animation = "hide 0.3s";

  setTimeout(() => {
  document.getElementById("header-menu-overlay-id").style.display = "none";
}, 300);
}

