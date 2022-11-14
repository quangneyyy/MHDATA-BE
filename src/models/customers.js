import Sequelize from "sequelize";

export default function (sequelize, DataTypes) {
  return sequelize.define(
    "Customers",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      name: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      source: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      businessName: {
        type: Sequelize.STRING,
      },
      businessID: {
        type: Sequelize.STRING,
      },
      foundedDate: {
        type: Sequelize.STRING,
      },
      dayCreated: {
        type: Sequelize.STRING,
      },
      dayModified: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    },
    {
      sequelize,
      timestamps: false,
    }
  );
}
