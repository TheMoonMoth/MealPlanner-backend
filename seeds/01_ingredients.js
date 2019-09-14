
exports.seed = function (knex, Promise) {
  return knex("ingredients")
    .del()
    .then(() => {
      return knex("ingredients").insert([
        {
          id: 1,
          name: "artichokes"
        },
        {
          id: 2,
          name: "bean and cheese burrito"
        },
        {
          id: 3,
          name: "chips"
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE ingredients_id_seq RESTART WITH 4;");
    })
}
