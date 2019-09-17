exports.up = (knex) => {
  return knex.schema.createTable('markets', table => {
    table.increments('id');
    table.string('name');
    table.specificType('ingredients_available', 'integer ARRAY');
    table.integer('times_visited');
    table.integer('rating');
    table.specificType('preferred_recipe_id', 'integer ARRAY');
    table.string('note');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('markets');
};