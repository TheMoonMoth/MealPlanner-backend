exports.up = function (knex, Promise) {
  return knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.string("name");
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("ingredients");
}