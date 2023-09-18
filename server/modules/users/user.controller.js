const UserService = require("./users.service");

class UserController {
  constructor() {
    this.service = new UserService();
  }

  getAllUser = (req, res) =>
    this.service
      .getAllUsers()
      .then((users) => res.status(200).send(users))
      .catch((err) => res.status(500).send(err));

  getOneUser = (req, res) =>
    this.service
      .getOneUser(req.params.id)
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
}

module.exports = UserController;
