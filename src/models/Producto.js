import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";

const Producto = sequelize.define(
  "productos",
  {
    Producto_ID: {
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
    Precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Producto;
