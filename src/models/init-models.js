import { DataTypes } from "sequelize";

import _customerList from "./customerList.js";

export default function initModels(sequelize) {
  const customerList = _customerList(sequelize, DataTypes);
  return {
    customerList,
  };
}
