exports.seed = (knex) => {
  return knex('markets')
    .del()
    .then(() => {
      return knex('markets').insert([
        {
          id: 0,
          name: 'any',
          ingredients_available: [0],
          times_visited: 0,
          rating: 0,
          preferred_recipe_id: [0],
          note: '',
        },
        {
          id: 1,
          name: 'trader joes',
          ingredients_available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          times_visited: 0,
          rating: 8,
          preferred_recipe_id: [0],
          note: '',
        },
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE markets_id_seq RESTART WITH 2;');
    });
};
