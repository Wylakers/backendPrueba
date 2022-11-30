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

// preArmado.bulkCreate([
//   {
//     Nombre: "Monster PC",
//     Descripcion:
//       "Ofrece la mejor experiencia para jugadores y creadores, con los últimos y mejores componentes del mercado",
//   },
//   {
//     Nombre: "Cruser Build",
//     Descripcion:
//       "PC con los mejores componentes que aseguran gran rendimiento en juegos de alta resolución",
//   },
//   {
//     Nombre: "NASA PC",
//     Descripcion:
//       "Un computador que ofrece gran rendimiento por un precio no tan elevado",
//   },
//   {
//     Nombre: "Budget Build",
//     Descripcion:
//       "Una PC de entrada para personas nuevas al gaming, con componentes balanceados que aseguran un buen rendimiento",
//   },
// ]);

export default preArmado;
