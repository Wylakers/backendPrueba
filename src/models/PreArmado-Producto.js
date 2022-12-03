import { DataTypes } from "sequelize";
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

// preArmado_Producto.bulkCreate([
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 1,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 4,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 8,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 10,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 12,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 15,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 16,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 17,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 18,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 21,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 23,
//   },
//   {
//     Pre_Armado_ID: 1,
//     Producto_ID: 24,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 2,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 5,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 8,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 10,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 13,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 15,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 16,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 17,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 19,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 22,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 23,
//   },
//   {
//     Pre_Armado_ID: 2,
//     Producto_ID: 24,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 2,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 6,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 9,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 10,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 13,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 15,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 16,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 17,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 20,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 22,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 23,
//   },
//   {
//     Pre_Armado_ID: 3,
//     Producto_ID: 24,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 3,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 7,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 9,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 11,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 14,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 15,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 16,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 17,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 20,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 22,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 23,
//   },
//   {
//     Pre_Armado_ID: 4,
//     Producto_ID: 24,
//   },
// ]);
// const build = await preArmado.findAll({
//   include: { model: Producto, required: true },
// });
// console.log(JSON.stringify(build, null, 2));
// console.log(build[0].productos[0].dataValues.Nombre);

export default preArmado_Producto;
