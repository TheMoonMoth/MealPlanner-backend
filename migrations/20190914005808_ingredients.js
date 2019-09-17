exports.up = (knex) => {
  return knex.schema.createTable('ingredients', table => {
    table.increments('id');
    table.string('name');
    table.integer('available_market_id');
    table.specificType('recipe_included', 'integer ARRAY');
    table.string('note');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('ingredients');
};