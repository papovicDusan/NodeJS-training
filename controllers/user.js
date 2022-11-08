const User = require("../models/user");

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res
        .status(200)
        .json({ message: "Fetched users successfully.", users: users });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const company = req.body.company;
  const country = req.body.country;

  const user = new User({
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    company: company,
    country: country,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User created successfully!",
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then((user) => {
      res.status(200).json({ message: "User fetched.", user: user });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateUser = (req, res, next) => {
  const userId = req.params.userId;

  const email = req.body.email;
  const password = req.body.password;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const company = req.body.company;
  const country = req.body.country;

  User.findById(userId)
    .then((user) => {
      user.email = email;
      user.password = password;
      user.first_name = first_name;
      user.last_name = last_name;
      user.company = company;
      user.country = country;
      return user.save();
    })
    .then((user) => {
      res.status(200).json({ message: "User updated!", user: user });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then((user) => {
      return User.findByIdAndRemove(userId);
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Deleted user." });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUsersCountry = (req, res, next) => {
  User.find({ country: req.query.country })
    .then((users) => {
      res
        .status(200)
        .json({ message: "Fetched users successfully.", users: users });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUsersFirstName = (req, res, next) => {
  User.find()
    .then((users) => {
      res.render("users", { users: users });
    })
    .catch((err) => {
      console.log(err);
    });
};
