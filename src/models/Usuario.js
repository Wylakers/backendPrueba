import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import detalleUsuario from "./DetalleUsuario.js";
import Reporte from "./Reporte.js";
import Orden from "./Orden.js";
import Review from "./Review.js";

const Usuarios = sequelize.define(
  "usuarios",
  {
    Usuario_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

//Conexión a tabla Detalle_Usuario
detalleUsuario.belongsTo(Usuarios, {
  foreignKey: "Usuario_ID",
});

Usuarios.hasMany(detalleUsuario, {
  foreignKey: "Usuario_ID",
});

//Conexión a tabla Reporte
Reporte.belongsTo(Usuarios, {
  foreignKey: "Usuario_ID",
});

Usuarios.hasMany(Reporte, {
  foreignKey: "Usuario_ID",
});

//Conexión a tabla Orden
Orden.belongsTo(Usuarios, {
  foreignKey: "Usuario_ID",
});

Usuarios.hasMany(Orden, {
  foreignKey: "Usuario_ID",
});

//Conexión a tabla Reseña
Review.belongsTo(Usuarios, {
  foreignKey: "Usuario_ID",
});

Usuarios.hasMany(Review, {
  foreignKey: "Usuario_ID",
});

// const ejemplo = await Usuarios.findAll({
//   include: { model: detalleUsuario, required: true },
// });
// console.log(JSON.stringify(ejemplo, null, 2));

export default Usuarios;
