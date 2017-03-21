
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, name: 'James', type: 'mocha', size: 'small', modifiers: 'soy', sugars: 1, comments: 'Extra chocolate please'},
        {id: 2, name: 'Alex', type: 'flat white', size: 'small', modifiers: 'soy', sugars: 2, comments: 'No cow milk'},
        {id: 3, name: 'Leo', type: 'green tea', size: 'small', modifiers: 'soy', sugars: 3, comments: 'A single ice cube please'}
      ])
    })
}
