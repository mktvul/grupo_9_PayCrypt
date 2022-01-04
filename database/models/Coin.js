module.exports = (sequelize, dataTypes) => {
    let alias = 'Coin';
   
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
       
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    
    };
    let config = {
        tableName: "coin",
        timestamps: false,
    }

    const Coin = sequelize.define(alias, cols, config); 

    Coin.associate = function (models) {
        Coin.hasMany(models.Product, {  
            as: "products", // El nombre del modelo pero en plural
            foreignKey: 'coinId',
        })
    }

    return Coin
};