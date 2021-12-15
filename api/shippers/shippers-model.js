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
  return db("Shippers").where("ShipperID",id).first()
}

async function create({ShipperName,Phone}) {
  const [id] = await db("Shippers").insert({ShipperName,Phone})
  return getById(id)
}

async function update(id,{ShipperName,Phone}) {
  await db("Shippers").where("ShipperID",id).update({ShipperName,Phone})
  return getById(id)
}

async function remove() {
  return 'delete wired'
}
