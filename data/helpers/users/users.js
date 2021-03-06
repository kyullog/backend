const db = require("../../dbConfig.js");

module.exports = {
  registerUser,
  getUser,
  getByName
};

async function registerUser({ username, password }) {
  await db("users").insert({ username, password });
  return db("users")
    .where({ username })
    .first();
}

async function getUser(id) {
  return db("users")
    .where({ id })
    .first();
}

function getByName(username) {
  return db("users")
    .where({ username })
    .first();
}
