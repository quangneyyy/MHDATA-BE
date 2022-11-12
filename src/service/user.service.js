import Models from "../database/sequelize.js";
import sequelize from "sequelize";
import moment from "moment";

const { customerList } = Models;

class UserEmailService {
  async getAllCustomerList() {
    try {
      const result = await customerList.findAll({
        attributes: [
          "id",
          "name",
          "phone",
          "email",
          "location",
          "source",
          "type",
          "businessName",
          "businessID",
          "foundedDate",
          "dayCreated",
          "dayModified",

          // [
          //   sequelize.fn(
          //     "date_format",
          //     sequelize.col("time"),
          //     "%d-%m-%Y %H:%i:%s"
          //   ),
          //   "time",
          // ],
        ],
      });

      const formatedResult = result.map((contact) => {
        return contact?.dataValues;
      });
      return formatedResult;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  async insertUserCustomerList(
    id,
    name,
    phone,
    email,
    location,
    source,
    type,
    businessName,
    businessID,
    foundedDate,
    dayCreated,
    dayModified
  ) {
    try {
      const result = await customerList.create({
        id,
        name,
        phone,
        email,
        location,
        source,
        type,
        businessName,
        businessID,
        foundedDate,
        dayCreated,
        dayModified,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default new UserEmailService();
