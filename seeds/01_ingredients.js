exports.seed = (knex) => {
  return knex('ingredients')
    .del()
    .then(() => {
      return knex('ingredients').insert([
        {
          id: 0,
          name: 'any',
          available_market_id: 0,
          recipe_included: [0],
          note: 'Wildcard ingredient',
        },
        {
          id: 1,
          name: 'artichokes',
          available_market_id: 0,
          recipe_included: [0],
          note: 'Goes great with everything!',
        },
        {
          id: 2,
          name: 'bean and cheese burrito',
          available_market_id: 1,
          recipe_included: [0],
          note: '',
        },
        {
          id: 3,
          name: 'chips',
          available_market_id: 0,
          recipe_included: [0],
          note: '',
        },
        {
          id: 4,
          name: 'basil',
          available_market_id: 0,
          recipe_included: [1],
          note: '',
        },
        {
          id: 5,
          name: 'garlic',
          available_market_id: 0,
          recipe_included: [1],
          note: '',
        },
        {
          id: 6,
          name: 'parmesan cheese',
          available_market_id: 0,
          recipe_included: [1],
          note: '',
        },
        {
          id: 7,
          name: 'pine nuts',
          available_market_id: 1,
          recipe_included: [1],
          note: '',
        },
        {
          id: 8,
          name: 'chicken',
          available_market_id: 0,
          recipe_included: [1],
          note: '',
        },
        {
          id: 9,
          name: 'white beans',
          available_market_id: 0,
          recipe_included: [1],
          note: '',
        },
        {
          id: 10,
          name: 'fusilli',
          available_market_id: 0,
          recipe_included: [1],
          note: '',
        },
        {
          id: 11,
          name: 'salsa',
          available_market_id: 0,
          recipe_included: [1],
          note: '',
        }
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE ingredients_id_seq RESTART WITH 12;');
    });
};
