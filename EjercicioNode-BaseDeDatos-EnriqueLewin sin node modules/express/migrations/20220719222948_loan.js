/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('loan', (table) => {
    table.increments('id')
    table.integer('user_id').references('user.id');
    table.integer('book_id').references('book_id');
    table.date('date');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('loan')
};
