window.addEventListener('load', function() {
    let form = document.querySelector('#form');

    form.addEventListener('submit', function(event) {
        let errors = {};
        let name = document.querySelector('#name');
        let shortDescription = document.querySelector('#shortDescription');
        let price = document.querySelector('#price');
        let largeDescription = document.querySelector('#largeDescription');
        let photoProduct = document.querySelector('#photoProduct');
        let category = document.querySelector('input[name = "category"]:checked');
        let coin = document.querySelector('input[name = "coin"]:checked');


        if (name.value.length < 5) {
            name.style.border = "solid 2px #db3236";
            errors.name = 'Debes completar este campo con al menos 5 caracteres';
        }

        if (shortDescription.value == '') {
            shortDescription.style.border = "solid 2px #db3236";
            errors.shortDescription = 'Debes completar este campo';
        }

        if (price.value == '') {
            price.style.border = "solid 2px #db3236";
            errors.price = 'Debes completar este campo';
        }

        if (largeDescription.value.length < 20) {
            largeDescription.style.border = "solid 2px #db3236";
            errors.largeDescription = 'Debes completar este campo con al menos 20 caracteres';
        }

        let validExtension = [".jpg", ".jpeg", ".png", ".gif"];
        let fileName = photoProduct.value.lastIndexOf(".");
        let fileExtension = photoProduct.value.substring(fileName);
        let isValid = validExtension.includes(fileExtension);

        if (photoProduct.value == '' || !isValid) {
            document.querySelector('.photoProductButton').style.border = 'solid 1px #db323'
            document.querySelector('.img-up').style.color = '#db323'
            errors.photoProduct = 'Debes subir una foto del producto valida';
        }

        if (category == null) {
            document.querySelector('#category-choose').style.color = '#db3236';
            document.querySelector('#category-choose').style.textDecoration = 'underline';
            errors.category = 'Debes seleccionar una categoria';
        }

        if (coin == null) {
            document.querySelector('#coin-choose').style.color = '#db3236';
            document.querySelector('#coin-choose').style.textDecoration = 'underline';
            errors.coin = 'Debes seleccionar una moneda';
        }

        if (Object.keys(errors).length >= 1) {
            event.preventDefault();
            if (errors.name) {
                document.querySelector('.name').innerText = errors.name;
            }
            
            if (errors.shortDescription) {
                document.querySelector('.shortDescription').innerText = errors.shortDescription;
            }
            
            if (errors.price) {
                document.querySelector('.price').innerText = errors.price;
            }
            
            if (errors.largeDescription) {
                document.querySelector('.largeDescription').innerText = errors.largeDescription;
            }
            
            if (errors.photoProduct) {
                document.querySelector('.photoProductError').innerText = errors.photoProduct;
            }
            
            if (errors.category) {
                document.querySelector('.categoryClass').innerText = errors.category;
            }
            
            if (errors.coin) {
                document.querySelector('#coin').innerText = errors.coin;
            }
        }
    })
});