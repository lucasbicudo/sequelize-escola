"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Registrations", [
      {
        status: "confirmado",
        estudante_id: 1,
        classes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "confirmado",
        estudante_id: 2,
        classes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "confirmado",
        estudante_id: 3,
        classes_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "confirmado",
        estudante_id: 4,
        classes_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "cancelado",
        estudante_id: 1,
        classes_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "cancelado",
        estudante_id: 2,
        classes_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
