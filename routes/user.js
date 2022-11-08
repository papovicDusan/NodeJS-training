const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.get("/users", userController.getUsers);

router.post("/user", userController.createUser);

router.get("/user/:userId", userController.getUser);

router.put("/user/:userId", userController.updateUser);

router.delete("/user/:userId", userController.deleteUser);

router.get("/users-country", userController.getUsersCountry);

router.get("/first-name", userController.getUsersFirstName);

module.exports = router;
