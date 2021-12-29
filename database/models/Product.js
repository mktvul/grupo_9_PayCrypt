module.exports = (sequelize, dataTypes) => {
  let alias = "Product";

  let cols = {
    id: {
      type: dataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    shortDescription: {
      type: dataTypes.STRING(155),
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(25, 15),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(500), //cambiar en la base de datos!! actualizar
      allowNull: false,
    },
    date: {
      type: dataTypes.BIGINT(15),
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    categoryId: {
      type: dataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
    coinId: {
      type: dataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
    userId: {
      type: dataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
    cartId: {
        type: dataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
      },
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.User, {
      as: "users", // El nombre del modelo pero en plural
      foreignKey: "userId",
    }),
      Product.belongsTo(models.Category, {
        as: "categories", // El nombre del modelo pero en plural
        foreignKey: "categoryId",
      }),
      Product.belongsTo(models.Coin, {
        as: "coins", // El nombre del modelo pero en plural
        foreignKey: "coinId",
      });
    Product.belongsTo(models.Cart, {
        as: 'carts',
        foreignKey: 'cartId',
      })
  };

  return Product;
};
