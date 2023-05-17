const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phonenumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    injury: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    career: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    significant: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bodyshape: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    purpose: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lifestyle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
