module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
   
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
    const Category = sequelize.define(alias, cols, config); 

    Category.associate = function (models) {
        Category.hasMany(models.Product, {  
            as: "products", // El nombre del modelo pero en plural
            foreignKey: 'categoryId',
            timestamps: false
        })
    }

    return Category
};