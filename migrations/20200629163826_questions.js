
exports.up = function(knex) {
  return knex.schema.createTable('punters_form', table => {
      table.increment('id').primary()
      table.string('Question')
      table.boolean('is_visible')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('punters_form')
};
