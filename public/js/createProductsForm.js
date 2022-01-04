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


        if (name.value == '') {
            name.style.border = "solid 2px #db3236";
            errors.name = 'Debes completar este campo';
        }

        if (shortDescription.value == '') {
            shortDescription.style.border = "solid 2px #db3236";
            errors.shortDescription = 'Debes completar este campo';
        }

        if (price.value == '') {
            price.style.border = "solid 2px #db3236";
            errors.price = 'Debes completar este campo';
        }

        if (largeDescription.value == '') {
            largeDescription.style.border = "solid 2px #db3236";
            errors.largeDescription = 'Debes completar este campo';
        }

        if (photoProduct.value == '') {
            document.querySelector('.photoProductButton').style.border = 'solid 1px #db323'
            document.querySelector('.img-up').style.color = '#db323'
            errors.photoProduct = 'Debes subir una foto del producto';
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
                document.querySelector('.name').innerText = 'Debes completar este campo';
            }
            
            if (errors.shortDescription) {
                document.querySelector('.shortDescription').innerText = 'Debes completar este campo';
            }
            
            if (errors.price) {
                document.querySelector('.price').innerText = 'Debes completar este campo';
            }
            
            if (errors.largeDescription) {
                document.querySelector('.largeDescription').innerText = 'Debes completar este campo';
            }
            
            if (errors.photoProduct) {
                document.querySelector('.photoProductError').innerText = 'Debes subir una foto del producto';
            }
            
            if (errors.category) {
                document.querySelector('.category').innerText = 'Debes seleccionar una categoria';
            }
            
            if (errors.coin) {
                document.querySelector('.coin').innerText = 'Debes seleccionar una moneda';
            }
        }
    })
});