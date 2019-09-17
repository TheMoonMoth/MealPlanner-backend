exports.up = (knex) => {
  return knex.schema.createTable('ingredients', table => {
    table.increments('id');
    table.string('name');
    table.integer('available_market_id');
    table.string('available_market_name');
    table.specificType('recipe_included', 'integer ARRAY');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('ingredients');
};