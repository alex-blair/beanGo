
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('orders', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('type')
    table.string('size')
    table.string('modifiers')
    table.integer('sugars')
    table.string('comments')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('orders')
}
