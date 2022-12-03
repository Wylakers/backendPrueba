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

// Categoria.bulkCreate([
//   {
//     Nombre: "Procesador",
//     Descripcion:
//       "Unidad de procesamiento encargada de interpretar las instrucciones de un hardware",
//   },
//   {
//     Nombre: "Tarjeta Grafica",
//     Descripcion:
//       "Procesamiento de datos relacionados con el vídeo y las imágenes",
//   },
//   {
//     Nombre: "RAM",
//     Descripcion:
//       "Almacena información que un programa necesita mientras se ejecuta",
//   },
//   {
//     Nombre: "SSD",
//     Descripcion:
//       "El disco de estado sólido es un sistema de almacenamiento de datos",
//   },
//   {
//     Nombre: "CPU Cooler",
//     Descripcion:
//       "Facilita el flujo de aire y se usa normalmente con un disipador térmico",
//   },
//   {
//     Nombre: "Case Cooler",
//     Descripcion: "Facilita el flujo de aire",
//   },
//   {
//     Nombre: "Case",
//     Descripcion: "Aloja diversos componentes de un computador",
//   },
//   {
//     Nombre: "Fuente de Poder",
//     Descripcion:
//       "Brindar el suministro de energía a cada componente de un computador",
//   },
//   {
//     Nombre: "Motherboard",
//     Descripcion:
//       "Une los componentes de la computadora en un mismo punto y les permite comunicarse entre sí",
//   },
//   {
//     Nombre: "Adaptador WiFi",
//     Descripcion: "Conecta el equipo a una red inalámbrica",
//   },
//   {
//     Nombre: "Sistema Operativo",
//     Descripcion:
//       "Controla los procesos básicos de una computadora y permiten el funcionamiento de otros programas",
//   },
//   {
//     Nombre: "Ensamblaje",
//     Descripcion: "Unir todos los componentes necesarios de un computador",
//   },
//   {
//     Nombre: "Mouse pad",
//     Descripcion: "Alfombrilla para apoyar el mouse",
//   },
//   {
//     Nombre: "Headset",
//     Descripcion: "Par de auriculares con un micrófono conectado",
//   },
//   {
//     Nombre: "Keyboard & Mouse Bundle",
//     Descripcion:
//       "Dispositivos de entrada que ayudan a interactuar con el computador",
//   },
// ]);

export default Categoria;
