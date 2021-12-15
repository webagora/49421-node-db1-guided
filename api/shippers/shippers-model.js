const db = require("../../data/db-config.js")

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  /*select * from shippers*/
  return db("Shippers")
  //return db("Shippers").select("ShipperName")
}

async function getById(id) {
  return db("Shippers").where("ShipperID",id)
}

async function create() {
  return 'create wired'
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
