
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 5, ingredient_id: 1, quantity: 1.5},
        { recipe_id: 5, ingredient_id: 2, quantity: 3},
        { recipe_id: 5, ingredient_id: 3, quantity: 2},
        { recipe_id: 5, ingredient_id: 4, quantity: 3},
      ]);
    });
};
