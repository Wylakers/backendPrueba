"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let preArmados = [
      {
        Nombre: "Monster PC",
        Descripcion:
          "Ofrece la mejor experiencia para jugadores y creadores, con los últimos y mejores componentes del mercado",
      },
      {
        Nombre: "Cruser Build",
        Descripcion:
          "PC con los mejores componentes que aseguran gran rendimiento en juegos de alta resolución",
      },
      {
        Nombre: "NASA PC",
        Descripcion:
          "Un computador que ofrece gran rendimiento por un precio no tan elevado",
      },
      {
        Nombre: "Budget Build",
        Descripcion:
          "Una PC de entrada para personas nuevas al gaming, con componentes balanceados que aseguran un buen rendimiento",
      },
    ];

    await queryInterface.bulkInsert("pre_armados", preArmados, {});

    let preArmadoProducto = [
      {
        Pre_Armado_ID: 1,
        Producto_ID: 1,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 4,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 8,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 10,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 12,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 15,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 16,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 17,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 18,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 21,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 23,
      },
      {
        Pre_Armado_ID: 1,
        Producto_ID: 24,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 2,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 5,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 8,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 10,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 13,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 15,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 16,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 17,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 19,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 22,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 23,
      },
      {
        Pre_Armado_ID: 2,
        Producto_ID: 24,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 2,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 6,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 9,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 10,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 13,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 15,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 16,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 17,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 20,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 22,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 23,
      },
      {
        Pre_Armado_ID: 3,
        Producto_ID: 24,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 3,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 7,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 9,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 11,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 14,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 15,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 16,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 17,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 20,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 22,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 23,
      },
      {
        Pre_Armado_ID: 4,
        Producto_ID: 24,
      },
    ];

    await queryInterface.bulkInsert(
      "pre_armado_productos",
      preArmadoProducto,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pre_armados", null, {});
    await queryInterface.bulkDelete("pre_armado_productos", null, {});
  },
};
