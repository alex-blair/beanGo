exports.up = function (knex, Promise) {
  return knex.schema.createTable('orders', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('type')
    table.string('size')
    table.string('modifiers')
    table.integer('sugars')
    table.text('comments')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('orders')
}