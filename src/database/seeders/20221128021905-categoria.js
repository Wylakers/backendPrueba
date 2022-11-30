"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let categorias = [
      {
        Nombre: "Procesador",
        Descripcion:
          "Unidad de procesamiento encargada de interpretar las instrucciones de un hardware",
      },
      {
        Nombre: "Tarjeta Grafica",
        Descripcion:
          "Procesamiento de datos relacionados con el vídeo y las imágenes",
      },
      {
        Nombre: "RAM",
        Descripcion:
          "Almacena información que un programa necesita mientras se ejecuta",
      },
      {
        Nombre: "SSD",
        Descripcion:
          "El disco de estado sólido es un sistema de almacenamiento de datos",
      },
      {
        Nombre: "CPU Cooler",
        Descripcion:
          "Facilita el flujo de aire y se usa normalmente con un disipador térmico",
      },
      {
        Nombre: "Case Cooler",
        Descripcion: "Facilita el flujo de aire",
      },
      {
        Nombre: "Case",
        Descripcion: "Aloja diversos componentes de un computador",
      },
      {
        Nombre: "Fuente de Poder",
        Descripcion:
          "Brindar el suministro de energía a cada componente de un computador",
      },
      {
        Nombre: "Motherboard",
        Descripcion:
          "Une los componentes de la computadora en un mismo punto y les permite comunicarse entre sí",
      },
      {
        Nombre: "Adaptador WiFi",
        Descripcion: "Conecta el equipo a una red inalámbrica",
      },
      {
        Nombre: "Sistema Operativo",
        Descripcion:
          "Controla los procesos básicos de una computadora y permiten el funcionamiento de otros programas",
      },
      {
        Nombre: "Ensamblaje",
        Descripcion: "Unir todos los componentes necesarios de un computador",
      },
      {
        Nombre: "Mouse pad",
        Descripcion: "Alfombrilla para apoyar el mouse",
      },
      {
        Nombre: "Headset",
        Descripcion: "Par de auriculares con un micrófono conectado",
      },
      {
        Nombre: "Keyboard & Mouse Bundle",
        Descripcion:
          "Dispositivos de entrada que ayudan a interactuar con el computador",
      },
    ];

    await queryInterface.bulkInsert("categoria", categorias, {});
    // await queryInterface.bulkInsert("categoria",[{}],{});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categoria", null, {});
  },
};
