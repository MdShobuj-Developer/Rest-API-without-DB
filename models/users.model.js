const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    name: "shobuj",
    email: "shobuj@gmail.com",
  },
  {
    id: uuidv4(),
    name: "manik",
    email: "manik@gmail.com",
  },
];
module.exports = users;
