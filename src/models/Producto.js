import DataTypes from "sequelize";
import sequelize from "../config/database.js";

const Producto = sequelize.define(
  "productos",
  {
    Producto_ID: {
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
    Precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Producto.bulKCreate([
//   {
//     Nombre: "INTEL CORE I9-12900K 16-CORE",
//     Precio: 599,
//     Descripcion: "24 Hilos. Frecuencia base 2.4GHz. Frecuencia turbo 5.2GHz",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-intel_4baa939e-b1cd-466c-bb76-0e6294fb0d5f.png?width=50&height=50",
//     Categoria_ID: 1,
//   },
//   {
//     Nombre: "INTEL CORE I7-12700F 12-CORE",
//     Precio: 339,
//     Descripcion: "20 Hilos. Frecuencia base 1.6GHz. Frecuencia turbo 4.9GHz",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-intel_4baa939e-b1cd-466c-bb76-0e6294fb0d5f.png?width=50&height=50",
//     Categoria_ID: 1,
//   },
//   {
//     Nombre: "INTEL CORE I5-12400F 6-CORE",
//     Precio: 155,
//     Descripcion: "12 Hilos. Frecuencia base 2.5GHz. Frecuencia turbo 4.4GHz",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-intel_4baa939e-b1cd-466c-bb76-0e6294fb0d5f.png?width=50&height=50",
//     Categoria_ID: 1,
//   },
//   {
//     Nombre: "NVIDIA GEFORCE RTX 4090 24GB",
//     Precio: 1799,
//     Descripcion: "Cuda-Cores 16384. Core-Clock 2230MHz, Boost-Clock 2520MHz",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-nvidia_8bee5a02-b3b8-4231-ad20-ad95403eb50f.png?width=50&height=50",
//     Categoria_ID: 2,
//   },
//   {
//     Nombre: "NVIDIA GEFORCE RTX 3080 10GB",
//     Precio: 799,
//     Descripcion: "Cuda-Cores 8704. Core-Clock 1440MHz, Boost-Clock 1815MHz",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-nvidia_8bee5a02-b3b8-4231-ad20-ad95403eb50f.png?width=50&height=50",
//     Categoria_ID: 2,
//   },
//   {
//     Nombre: "NVIDIA GEFORCE RTX 3070 8GB",
//     Precio: 599,
//     Descripcion: "Cuda-Cores 5888. Boost-Clock 1755MHz",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-nvidia_8bee5a02-b3b8-4231-ad20-ad95403eb50f.png?width=50&height=50",
//     Categoria_ID: 2,
//   },
//   {
//     Nombre: "NVIDIA GEFORCE RTX 3060 12GB",
//     Precio: 399,
//     Descripcion: "Cuda-Cores 3584. Boost-Clock 1807MHz",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-nvidia_8bee5a02-b3b8-4231-ad20-ad95403eb50f.png?width=50&height=50",
//     Categoria_ID: 2,
//   },
//   {
//     Nombre: "32GB DDR4 DUAL CHANNEL",
//     Precio: 159,
//     Descripcion: "Speed 3200MHz, Type 288-Pin DDR4",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/RAM_1c378c6f-baa0-44c7-8bc1-e92ce6de5401.png?width=50&height=50",
//     Categoria_ID: 3,
//   },
//   {
//     Nombre: "16GB DDR4 DUAL CHANNEL",
//     Precio: 79,
//     Descripcion: "Speed 3200MHz, Type 288-Pin DDR4",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/RAM_1c378c6f-baa0-44c7-8bc1-e92ce6de5401.png?width=50&height=50",
//     Categoria_ID: 3,
//   },
//   {
//     Nombre: "1TB NVME M.2",
//     Precio: 99,
//     Descripcion: "Lectura 2400MBps. Escritura 1750MBps",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/M2_42cfb077-ffdd-4300-8af3-b1fb2c03b83c.png?width=50&height=50",
//     Categoria_ID: 4,
//   },
//   {
//     Nombre: "500GB NVME M.2",
//     Precio: 69,
//     Descripcion: "Lectura 2400MBps. Escritura 1750MBps",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/M2_42cfb077-ffdd-4300-8af3-b1fb2c03b83c.png?width=50&height=50",
//     Categoria_ID: 4,
//   },
//   {
//     Nombre: "CM MASTERLIQUID ML360",
//     Precio: 149,
//     Descripcion: "Fan RPM 650-1800. Fan Noise 8-27dBA",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/ML2402.png?width=50&height=50",
//     Categoria_ID: 5,
//   },
//   {
//     Nombre: "CM MASTERLIQUID ML240L",
//     Precio: 99,
//     Descripcion: "Fan RPM 650-1800. Fan Noise 8-27dBA",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/ML2402.png?width=50&height=50",
//     Categoria_ID: 5,
//   },
//   {
//     Nombre: "COOLER MASTER HYPER 212 EVO",
//     Precio: 39,
//     Descripcion: "Fan RPM 600-2000. Fan Noise 9-36dBA",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/ML2402.png?width=50&height=50",
//     Categoria_ID: 5,
//   },
//   {
//     Nombre: "QTY 4X CM MASTERFANS RGB",
//     Precio: 49,
//     Descripcion: "Air Flow 55-60CFM. Noise Level variable",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/4xFan.png?width=50&height=50",
//     Categoria_ID: 6,
//   },
//   {
//     Nombre: "COOLER MASTER TD500 RGB",
//     Precio: 129,
//     Descripcion: "Type ATX Mid Tower. Case Material Steel-Plastic-Glass",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/TD500CASE.png?width=50&height=50",
//     Categoria_ID: 7,
//   },
//   {
//     Nombre: "WIRELESS 802.11AC",
//     Precio: 29,
//     Descripcion: "WiFi Built-in or Adaptor",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/WifiCard.png?width=50&height=50",
//     Categoria_ID: 10,
//   },
//   {
//     Nombre: "1000W ATX 80 PLUS GOLD",
//     Precio: 179,
//     Descripcion: "Eficiencia 90%+. Certificado 80 PLUS GOLD. Modular",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/600WPSU_a434a461-6c03-43ad-9d62-9d4fffd92911.png?width=50&height=50",
//     Categoria_ID: 8,
//   },
//   {
//     Nombre: "850W ATX 80 PLUS GOLD",
//     Precio: 159,
//     Descripcion: "Eficiencia 90%. Certificado 80 PLUS GOLD. Modular",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/600WPSU_a434a461-6c03-43ad-9d62-9d4fffd92911.png?width=50&height=50",
//     Categoria_ID: 8,
//   },
//   {
//     Nombre: "700W ATX 80 PLUS GOLD",
//     Precio: 89,
//     Descripcion: "Eficiencia 82-86%. Certificado 80 PLUS. Non-Modular",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/600WPSU_a434a461-6c03-43ad-9d62-9d4fffd92911.png?width=50&height=50",
//     Categoria_ID: 8,
//   },
//   {
//     Nombre: "ASUS Z690 SERIES | INTEL",
//     Precio: 225,
//     Descripcion: "Max-RAM 5333 DDR4/128GB. Socket Type LGA 1700. Intel support",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/MSIB460MAPRO_d9ec608f-cdb8-44fd-a220-de2864681b6a.png?width=50&height=50",
//     Categoria_ID: 9,
//   },
//   {
//     Nombre: "ASUS B660 SERIES | INTEL",
//     Precio: 149,
//     Descripcion: "Max-RAM 5333 DDR4/128GB. Socket Type LGA 1700. Intel support",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/MSIB460MAPRO_d9ec608f-cdb8-44fd-a220-de2864681b6a.png?width=50&height=50",
//     Categoria_ID: 9,
//   },
//   {
//     Nombre: "WINDOWS 11 HOME + USB RECOVERY",
//     Precio: 119,
//     Descripcion: "Home version 64-bit. Packaing OEM",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/win-11-TRANS.png?width=50&height=50",
//     Categoria_ID: 11,
//   },
//   {
//     Nombre: "BUILD + SETUP + TESTING + WARRANTY",
//     Precio: 99,
//     Descripcion: "A worker builds the PC for you",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/redux-logo.png?width=50&height=50",
//     Categoria_ID: 12,
//   },
//   {
//     Nombre: "Mouse Pad - Extra Large",
//     Precio: 29,
//     Descripcion: "Marca Redux",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/mouse-lage_200x.png?width=50&height=50",
//     Categoria_ID: 13,
//   },
//   {
//     Nombre: "Mouse Pad - Standard",
//     Precio: 19,
//     Descripcion: "Marca Redux",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/mouse-normal_200x.png?width=50&height=50",
//     Categoria_ID: 13,
//   },
//   {
//     Nombre: "Headset",
//     Precio: 25,
//     Descripcion: "Marca Redux",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/REDUXHeadsetRGB_200x.png?width=50&height=50",
//     Categoria_ID: 14,
//   },
//   {
//     Nombre: "Keyboard & Mouse Bundle",
//     Precio: 39,
//     Descripcion: "Marca Redux",
//     Imagen:
//       "https://cdn.shopify.com/s/files/1/0408/5792/7834/products/KEYBOARD-MOUSE_200x.png?width=50&height=50",
//     Categoria_ID: 15,
//   },
// ]);

export default Producto;
