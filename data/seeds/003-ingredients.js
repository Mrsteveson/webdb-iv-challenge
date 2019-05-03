
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: '1lb Ground Beef'},
        { name: 'Can of Diced Tomatoes'},
        { name: 'Large Onion'},
        { name: 'Can of Kidney beans'}
      ]);
    });
};
