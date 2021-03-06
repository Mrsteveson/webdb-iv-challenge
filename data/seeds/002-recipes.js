
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Spicy Home-Made Tacos', dish_id: 1},
        { name: 'Vegetarian Tacos', dish_id: 1},
        { name: 'Chicken Tetrazzini', dish_id: 2},
        { name: 'Bacon Stuffed Burger', dish_id: 3},
        { name: 'Secret Family Recipe Chili', dish_id: 4},
        { name: 'Spicy Cowboy Chili', dish_id: 4},
        { name: 'Ceasar Salad', dish_id: 5},
      ]);
    });
};
