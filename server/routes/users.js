var express = require("express");
const UserController = require("../modules/users/user.controller");
var router = express.Router();
const userController = new UserController();


router.get("/:id", userController.getOneUser.bind(userController));

module.exports = router;
