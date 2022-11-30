import DataTypes from "sequelize";

import sequelize from "../config/database.js";

const preArmado = sequelize.define(
  "pre_armado",
  {
    Pre_Armado_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default preArmado;
