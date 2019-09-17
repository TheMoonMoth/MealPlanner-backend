const database = require('./server/database-connection.js');

module.exports = {
  ingredients: {
    list() {
      return database('ingredients').select();
    },
    read(id) {
      return database('ingredients')
        .select()
        .where('id', id)
        .first();
    },
    create(ingredient) {
      return database('ingredients')
        .insert(ingredient)
        .returning('*')
        .then(record => record[0]);
    },
    delete(id) {
      return database('ingredients')
        .delete()
        .where('id', id);
    }
  },
  recipes: {
    list() {
      return database('recipes').select();
    },
    read(id) {
      return database('recipes')
        .select()
        .where('id', id)
        .first();
    },
    create(recipe) {
      return database('recipes')
        .insert(recipe)
        .returning('*')
        .then(record => record[0]);
    },
    delete(id) {
      return database('recipes')
        .delete()
        .where('id', id);
    },
  },
  markets: {
    list() {
      return database('markets').select();
    },
    read(id) {
      return database('markets')
        .select()
        .where('id', id)
        .first();
    },
  }
};
