import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";

const detalleUsuario = sequelize.define(
  "detalle_usuario",
  {
    Detalle_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Departamento: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    Ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Codigo_postal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default detalleUsuario;
