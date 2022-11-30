import DataTypes from "sequelize";
import sequelize from "../config/database.js";

import detalleUsuario from "./DetalleUsuario.js";

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

detalleUsuario.belongsTo(Usuarios, {
  foreignKey: "Usuario_ID",
});

Usuarios.hasOne(detalleUsuario, {
  foreignKey: "Usuario_ID",
});

// const ejemplo = await Usuarios.findAll({
//   include: { model: detalleUsuario, required: true },
// });
// console.log(JSON.stringify(ejemplo, null, 2));

export default Usuarios;
