import DataTypes from "sequelize";

import sequelize from "../config/database.js";

import preArmado from "./PreArmado.js";
import Producto from "./Producto.js";

const preArmado_Producto = sequelize.define(
  "pre_armado_producto",
  {
    Pre_Armado_Producto_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  { timestamps: false }
);

preArmado.belongsToMany(Producto, {
  through: preArmado_Producto,
  foreignKey: "Pre_Armado_ID",
});
Producto.belongsToMany(preArmado, {
  through: preArmado_Producto,
  foreignKey: "Producto_ID",
});

// const build = await preArmado.findAll({
//   include: { model: Producto, required: true },
// });
// console.log(JSON.stringify(build, null, 2));
// console.log(build[0].productos[0].dataValues.Nombre);

export default preArmado_Producto;
