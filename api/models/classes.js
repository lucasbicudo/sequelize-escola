"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Classes.hasMany(models.Registrations, { foreignKey: "classes_id" });
      Classes.belongsTo(models.People, { foreignKey: "docente_id" });
      Classes.belongsTo(models.Levels, { foreignKey: "levels_id" });
    }
  }
  Classes.init(
    {
      data_begin: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Classes",
    }
  );
  return Classes;
};
