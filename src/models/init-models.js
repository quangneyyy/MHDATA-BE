import { DataTypes } from "sequelize";

import _customers from "./customers.js";

export default function initModels(sequelize) {
  const customers = _customers(sequelize, DataTypes);
  return {
    customers,
  };
}
