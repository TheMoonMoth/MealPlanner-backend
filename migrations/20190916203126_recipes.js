exports.up = (knex) => {
  return knex.schema.createTable('recipes', table => {
    table.increments('id');
    table.string('name');
    table.specificType('ingredients_included', 'integer ARRAY');
    table.integer('times_bought');
    table.integer('rating');
    table.specificType('available_market_id', 'integer ARRAY');
    table.string('note');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('recipes');
};