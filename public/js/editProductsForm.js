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
                document.querySelector('.nameEdit').innerText = errors.name;
            }
            
            if (errors.shortDescription) {
                document.querySelector('.shortDescriptionEdit').innerText = errors.shortDescription;
            }
            
            if (errors.price) {
                document.querySelector('.priceEdit').innerText = errors.price;
            }
            
            if (errors.largeDescription) {
                document.querySelector('.largeDescriptionEdit').innerText = errors.largeDescription;
            }
            
            if (errors.photoProduct) {
                document.querySelector('.photoProductEdit').innerText = errors.photoProduct;
            }
            
            if (errors.category) {
                document.querySelector('.categoryEdit').innerText = errors.category;
            }
            
            if (errors.coin) {
                document.querySelector('.coinEdit').innerText = errors.coin;
            }
        }
    })
})