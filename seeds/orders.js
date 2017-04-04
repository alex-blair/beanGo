
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, name: 'tony', type: 'mocha', size: 'large', modifiers: 'soy,milk,almond', sugars: 2, comments: 'Please make it hot'},
        {id: 2, name: 'don', type: 'latte', size: 'small', modifiers: 'soy,milk,almond', sugars: 3, comments: 'Please make it hot'},
        {id: 3, name: 'rich', type: 'green tea', size: 'large', modifiers: 'soy,milk,almond', sugars: 4, comments: 'Please make it hot'},
      ]);
    });
};