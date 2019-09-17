
exports.seed = (knex) => {
  return knex('ingredients')
    .del()
    .then(() => {
      return knex('ingredients').insert([
        {
          id: 1,
          name: 'artichokes',
          available_market_id: 0,
          available_market_name: 'any',
          recipe_included: [0]
        },
        {
          id: 2,
          name: 'bean and cheese burrito',
          available_market_id: 1,
          available_market_name: 'trader_joes',
          recipe_included: [0]
        },
        {
          id: 3,
          name: 'chips',
          available_market_id: 0,
          available_market_name: 'any',
          recipe_included: [0]
        },
        {
          id: 4,
          name: 'basil',
          available_market_id: 0,
          available_market_name: 'any',
          recipe_included: [1]
        },
        {
          id: 5,
          name: 'garlic',
          available_market_id: 0,
          available_market_name: 'any',
          recipe_included: [1]
        },
        {
          id: 6,
          name: 'parmesan cheese',
          available_market_id: 0,
          available_market_name: 'any',
          recipe_included: [1]
        },
        {
          id: 7,
          name: 'pine nuts',
          available_market_id: 1,
          available_market_name: 'trader joes',
          recipe_included: [1]
        },
        {
          id: 8,
          name: 'chicken',
          available_market_id: 0,
          available_market_name: 'any',
          recipe_included: [1]
        },
        {
          id: 9,
          name: 'white beans',
          available_market_id: 0,
          available_market_name: 'any',
          recipe_included: [1]
        },
        {
          id: 10,
          name: 'fusilli',
          available_market_id: 0,
          available_market_name: 'any',
          recipe_included: [1]
        }
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE ingredients_id_seq RESTART WITH 11;');
    });
};
