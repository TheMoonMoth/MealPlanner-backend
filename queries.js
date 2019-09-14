const database = require("./server/database-connection.js")

module.exports = {
  list() {
    return database("ingredients").select()
  },
  // read(id) {
  //   return database("resolutions")
  //     .select()
  //     .where("id", id)
  //     .first()
  // },
  // create(resolution) {
  //   return database("resolutions")
  //     .insert(resolution)
  //     .returning("*")
  //     .then(record => record[0])
  // },
  // update(id, resolution) {
  //   return database("resolutions")
  //     .update(resolution)
  //     .where("id", id)
  //     .returning("*")
  //     .then(record => record[0])
  // },
  // delete(id) {
  //   return database("resolutions")
  //     .delete()
  //     .where("id", id)
  // }
}
