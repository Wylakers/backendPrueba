import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import TipoReview from "./TipoReview.js";

const Review = sequelize.define(
  "review",
  {
    Review_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Puntaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Comentario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Video: {
      type: DataTypes.STRING,
    },
    Link: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

//Conexión a tabla Tipo_Reseña
TipoReview.belongsTo(Review, {
  foreignKey: "Review_ID",
});

Review.hasMany(TipoReview, {
  foreignKey: "Review_ID",
});

export default Review;
