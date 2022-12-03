import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import Orden from "../models/Orden.js";
import Producto from "../models/Producto.js";

const Orden_Producto = sequelize.define(
  "orden_producto",
  {
    Orden_Producto_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

Orden.belongsToMany(Producto, {
  through: Orden_Producto,
  foreignKey: "Orden_ID",
});

Producto.belongsToMany(Orden, {
  through: Orden_Producto,
  foreignKey: "Producto_ID",
});

export default Orden_Producto;
