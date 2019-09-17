exports.seed = (knex) => {
  return knex('recipes')
    .del()
    .then(() => {
      return knex('recipes').insert([
        {
          id: 0,
          name: 'any',
          ingredients_included: [],
          times_bought: 0,
          rating: 0,
          available_market_id: [0],
          note: '',
        },
        {
          id: 1,
          name: 'pesto',
          ingredients_included: [4, 5, 6, 7, 8, 9, 10, 11],
          times_bought: 0,
          rating: 10,
          available_market_id: [0, 1, 2],
          note: '',
        },
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE recipes_id_seq RESTART WITH 2;');
    });
};
