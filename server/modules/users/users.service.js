const UserRepository = require("./user.repository");

class UserService {
  constructor() {
    this.repo = new UserRepository();
  }

  async getOneUser(id) {
    const user = await this.repo.getOne(id);
    if (!user) throw new Error("No user found");
    return user;
  }

  async getAllUsers() {
    const users = await this.repo.getAll();
    if (!users) throw new Error("Internal Error");
    return users;
  }
}

module.exports = UserService;
