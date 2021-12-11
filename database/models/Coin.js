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
    let config = {      // ver que onda el codigo aca, si lo dejamos o lo quitamos
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Coin = sequelize.define(alias, cols, config); 

    Coin.associate = function (models) {
        Coin.hasMany(models.Product, {  
            as: "products", // El nombre del modelo pero en plural
            foreignKey: 'coinId',
            timestamps: false
        })
    }

    return Coin
};