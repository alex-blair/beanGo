
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffees').del()
    .then(function () {
      // Inserts seed entries
      return knex('coffees').insert([
        {id: 1, name: 'mocha'},
        {id: 2, name: 'latte'},
        {id: 3, name: 'green tea'}
      ]);
    });
};
