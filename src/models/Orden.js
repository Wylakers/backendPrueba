import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Orden = sequelize.define(
  "orden",
  {
    Orden_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Orden;
