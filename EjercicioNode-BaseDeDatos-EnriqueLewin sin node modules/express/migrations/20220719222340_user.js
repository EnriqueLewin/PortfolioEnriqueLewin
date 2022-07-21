/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user' , (table) => {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.integer('country_id').references('country.id');
    table.integer('department_id').references('department.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
