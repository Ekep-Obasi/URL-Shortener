const User = require("../../database/user");
class UserRepository {
  getOne(id) {
    return User.findByPk(id);
  }

  getAll() {
    return User.findAll();
  }
}

// mailinator
module.exports = UserRepository;
