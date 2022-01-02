module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
   
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
       
        priceTotal: {
            type: dataTypes.DECIMAL(25,15),
            allowNull: false
        },

        userId: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        }
        
    };
    let config = {
        tableName: "cart",
        timestamps: false,
    }
    const Cart = sequelize.define(alias, cols, config); 

    Cart.associate = function (models) {
        Cart.belongsTo(models.User, {    // hasOne = la clave externa se definirá en el modelo de destino, si no porner .belongsTo
            as: "users", // El nombre del modelo pero en plural
            foreignKey: 'userId',
        })
        Cart.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'cartId',
          })
    }

    return Cart
};