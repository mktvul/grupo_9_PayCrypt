window.addEventListener('load', function() {

    let form = document.querySelector('#formEdit');

    form.addEventListener('submit', function(event) {
        let errors = {};
        let name = document.querySelector('#nameEdit');
        let shortDescription = document.querySelector('#shortDescriptionEdit');
        let price = document.querySelector('#priceProductEdit');
        let largeDescription = document.querySelector('#largeDescriptionEdit');
        let photoProduct = document.querySelector('#photoProductEdit');
        let category = document.querySelector('input[name = "categoryEdit"]:checked');
        let coin = document.querySelector('input[name = "coinEdit"]:checked');

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
                document.querySelector('.nameEdit').innerText = 'Debes completar este campo';
            }
            
            if (errors.shortDescription) {
                document.querySelector('.shortDescriptionEdit').innerText = 'Debes completar este campo';
            }
            
            if (errors.price) {
                document.querySelector('.priceEdit').innerText = 'Debes completar este campo';
            }
            
            if (errors.largeDescription) {
                document.querySelector('.largeDescriptionEdit').innerText = 'Debes completar este campo';
            }
            
            if (errors.photoProduct) {
                document.querySelector('.photoProductEdit').innerText = 'Debes subir una foto del producto';
            }
            
            if (errors.category) {
                document.querySelector('.categoryEdit').innerText = 'Debes seleccionar una categoria';
            }
            
            if (errors.coin) {
                document.querySelector('.coinEdit').innerText = 'Debes seleccionar una moneda';
            }
        }
    })
})