module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
   
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
       
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        shortDescription: {
            type: dataTypes.STRING(155),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(25,15),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500), //cambiar en la base de datos!! actualizar
            allowNull: false
        },
        date: {
            type: dataTypes.BIGINT(15),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: false
        }

    };
    let config = {
        timestamps: false,
        //createdAt: 'created_at',
       // updatedAt: 'updated_at',
    //    deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.hasMany(models.User, {    
            as: "users", // El nombre del modelo pero en plural
            foreignKey: 'id',
            timestamps: false
        }),
        
        Product.hasMany(models.Category, { 
            as: "categories", // El nombre del modelo pero en plural
            foreignKey: 'id',
            timestamps: false
        }),
        
        Product.belongsTo(models.Coin, { 
            as: "coins", // El nombre del modelo pero en plural
            foreignKey: 'id',
            timestamps: false
        }),

        Product.hasMany(models.Cart, {
            as: 'carts',
            foreignKey: 'productId',
            timestamps: false
          })
    }

    return Product
};