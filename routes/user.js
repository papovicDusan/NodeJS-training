const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.get("/", userController.getUsers);

router.post("/", userController.createUser);

router.get("/users-country", userController.getUsersCountry);

router.get("/first-name", userController.getUsersFirstName);

router.get("/:userId", userController.getUser);

router.put("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

module.exports = router;
