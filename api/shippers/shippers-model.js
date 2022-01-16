const db = require('../../data/db-config')

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
    // return db("Shippers").select("ShipperName")
}

async function getById(id) {
  // select * from shippers where ShipperID = 2
  return db('shippers').where('shipperid', id).first()
}

async function create({ShipperName,Phone}) {
  // insert into shippers (shippername, phone) values ('Acme' '(101)-123-4567')
  const [id] = await db("Shippers").insert({ShipperName,Phone})
  return getById(id)
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
