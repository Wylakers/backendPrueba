import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TipoReview = sequelize.define(
  "tipo_review",
  {
    Tipo_Review_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestams: false,
  }
);

export default TipoReview;
