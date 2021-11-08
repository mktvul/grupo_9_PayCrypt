//Require's
const path = require("path");
const fs = require("fs");

//Data base
const productsFilePath = path.join(__dirname, "../data/products.json"); //Identificamos la ruta de nuestra base de datos de usuarios
const products = JSON.parse(fs.readFileSync(productsFilePath), "utf-8"); //Convertimos la base de datos de usuarios JSON en un array de objetos literales

const productsControllers = {
    //Listado de productos (GET)
  listOfProducts: (req, res) => {
    res.render("products", {
        productsSent: products //Acá falta automatizar el EJS
    });
  },

  //Formulario de creación de producto (GET) (sólo renderiza formulario)
  create: (req, res) => {
    res.render("./products/create");
  },

  //Detalle de un producto particular (GET)
  details: (req, res) => {
    const id = req.params.id;
    const product = products.find(product => {
        return product.id == id
    })

    res.render("./products/details", {
        productSent: product
    });
  },

  //Acción de creación (a donde se envía el formulario) (POST)
  store: (req, res) => {
    //Acción de creación (a donde se envía el formulario) -- ENVIAR A INDEX --
    // Guardamos el producto
		let newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			descripcion: req.body.descripcion,
			category: req.body.category,
			coin: req.body.coin,
			/* ...req.body, */
			image: req.file.filename
		}

		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		
		res.redirect("/products");
  },

  // Formulario de edición de productos (GET)
  edit: (req, res) => {
    const id = req.params.id;
    const product = products.find(product => {
        return product.id == id;
    });

    res.render("./products/edit", {
        productSent: product
    });
  },

  // Acción de edición (a donde se envía el formulario) (PUT)
  update: (req, res) => {
    //Acción de edición de producto que llegó por ID
		let id = req.params.id; // Guardo ID
    
    //Identifico el producto que voy a editar
		let productToEdit = products.find(product => {
			return product.id == id;
		});

    //Edito
		let editedProduct = {
			id: id,
			name: req.body.name,
			price: req.body.price,
			descripcion: req.body.descripcion,
			category: req.body.category,
			coin: req.body.coin,
			/* ...req.body, */
			image: req.file ? req.file.filename : productToEdit.image
		}
		
		//Modifico el array
		products.forEach((producto, index) => {
			if (producto.id == id){
				products[index] = editedProduct;
			}
		});

    //Guardo en la base de datos JSON
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/products");
  },

  
  //Acción de borrado (DELETE)
  destroy: (req, res) => {
    //Acción de borrado
    // Elimino el producto que llegó por ID
		let id = req.params.id
		
    //Modifico el array
		let finalProducts = products.filter(product => {
			return product.id != id
		});

    //Actualizo la base de datos JSON
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
		res.redirect("/products");
  },

  cart: (req, res) => {
    res.render("./products/cart");
  }
};

module.exports = productsControllers;