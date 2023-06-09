const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainer_cert', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trainer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    certification_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'certifications',
        key: 'id'
      }
    },
    expiration_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    issued_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainer_cert',
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
      {
        name: "certification_id",
        using: "BTREE",
        fields: [
          { name: "certification_id" },
        ]
      },
    ]
  });
};
