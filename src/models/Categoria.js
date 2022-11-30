import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import Producto from "./Producto.js";

const Categoria = sequelize.define(
  "categoria",
  {
    Categoria_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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

Producto.belongsTo(Categoria, {
  foreignKey: "Categoria_ID",
});

Categoria.hasMany(Producto, {
  foreignKey: "Categoria_ID",
});

// Ejercicio para probar datos - Producto y categoria
// const ejemplo2 = await Producto.findAll({
//   include: { model: Categoria, required: true },
// });
// console.log(JSON.stringify(ejemplo2, null, 2));

export default Categoria;
