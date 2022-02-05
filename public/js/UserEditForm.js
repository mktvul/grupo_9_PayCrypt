window.addEventListener('load', function() {

    let form = document.querySelector('#form-user-edit');

    let name = document.querySelector('#name');
    let lastName = document.querySelector('#lastName');
    let dni = document.querySelector('#dni');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let password1 = document.querySelector('#password1');
    let image  = document.querySelector('#image');
 


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let errors = {};
     
        // EDITAR NOMBRE 
        if (name.value.length <= 1) {
            name.style.border = "solid 2.5px #db3236";   
            errors.name = "Completá este dato con al menos 2 caracteres";
          } else {
            name.style.border = "solid 2.5px #0F9D58";
          }

          // EDITAR APELLIDO
        if (lastName.value.length == '') {
            lastName.style.border = "solid 2.5px #db3236";
            errors.lastName = "Completá este dato";
          } else if (lastName.value.length <= 2){
            lastName.style.border = "solid 2.5px #db3236";   
            errors.name = "Completá este dato con al menos 2 caracteres";
          } else {
            lastName.style.border = "solid 2.5px #0F9D58";
          }

          // EDITAR DNI 
          if (dni.value.length <= 7) {
            dni.style.border = "solid 2.5px #db3236";
            errors.dni = "Completá este dato";
          } else {
            dni.style.border = "solid 2.5px #0F9D58";
          }


          // Regex for email validation
            const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

          // EDITAR EMAIL 
          if (!regex.test(email.value)) {
            email.style.border = "solid 2.5px #db3236";
            errors.email = "Completá este dato";
          } else {
            email.style.border = "solid 2.5px #0F9D58";
          }

            // EDITAR PASSWORD
          if (password.value.length <= 7) {
            password.style.border = "solid 2.5px #db3236";
            errors.password = "Completá este dato con al menos 8 caracteres";
          } else {
            password.style.border = "solid 2.5px #0F9D58";
          }
          // CONFIRMAR PASSWORD
          if (
            password1.value == "" || password1.value != password.value
          ) {
            password1.style.border = "solid 2.5px #db3236";
            errors.password1 =
              "Completá este dato con el mismo del campo anterior";
          } else {
              password1.style.border = 'solid 2.5px #0F9D58';
          }   

         

    })

    name.onclick = function () {
        this.style.border = "";
      };
    
      lastName.onclick = function () {
        this.style.border = "";
      };
    
      dni.onclick = function () {
        this.style.border = "";
      };
    
     
      email.onclick = function () {
        this.style.border = "";
      };
    
      password.onclick = function () {
        this.style.border = "";
      };
    
      password1.onclick = function () {
        this.style.border = "";
      };
    
   


})