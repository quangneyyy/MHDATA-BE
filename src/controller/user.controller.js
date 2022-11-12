import UserService from "../service/user.service.js";

class UserController {
  async insertNewUserCustomerList(req, res) {
    const {
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
    } = req.body;
    if (name && email) {
      const resultStatus = await UserService.insertUserCustomerList(
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
      );
      return resultStatus
        ? res.status(200).send({
            message: "Insert user contact info successfully !",
            success: "Your information has been recored !",
          })
        : res.status(400).send({
            message: "Insert user contact info failure !",
            err: "An error occurred, check again !",
          });
    } else {
      res.status(400).send({ message: "name and email is required field !" });
    }
  }

  async getAllContact(req, res) {
    const contacts = await UserService.getAllCustomerList();
    return contacts
      ? res.status(200).send({
          message: "Insert user contact info successfully !",
          success: "Your information has been recored !",
          data: contacts,
        })
      : res.status(400).send({ message: "Failure!" });
  }
}

export default new UserController();
