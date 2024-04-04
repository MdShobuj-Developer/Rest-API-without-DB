const path = require("path");
const { v4: uuidv4 } = require("uuid");
const users = require("../models/users.model");

const userGet = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/users.view.html"));
};
//get users data
const getUser = (req, res) => {
  res.status(200).json(users);
};

//add user
const postUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(users);
};

//update user info
const putUser = (req, res) => {
  const userid = req.params.id;
  const { name, email } = req.body;
  users
    .filter((user) => {
      return user.id == userid;
    })
    .map((selectuser) => {
      selectuser.name = name;
      selectuser.email = email;
    });
  res.status(200).json(users);
};

//delete user
const deleteUser = (req, res) => {
  const userid = req.params.id;
  const newUserFiter = users.filter((user) => {
    return user.id !== userid;
  });
  res.status(200).json(newUserFiter);
};

module.exports = {
  userGet,
  getUser,
  postUser,
  putUser,
  deleteUser,
};
