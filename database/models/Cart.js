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
        

    };
    let config = {
        timestamps: false,
        //createdAt: 'created_at',
       // updatedAt: 'updated_at',
        deletedAt: false
    }
    const Cart = sequelize.define(alias, cols, config); 

    Cart.associate = function (models) {
        Cart.hasOne(models.User, {    // hasOne = la clave externa se definirá en el modelo de destino, si no porner .belongsTo
            as: "users", // El nombre del modelo pero en plural
            foreignKey: 'id',
            timestamps: false
        }),
        Cart.belongsToMany(models.Product, {
            as: 'products',
            through: 'cartProducts',
            foreignKey: 'cartId',
            otherKey: 'productId',
            timestamps: false
          })
    }

    return Cart
};