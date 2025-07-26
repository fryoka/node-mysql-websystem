exports.up = function(knex) {
  return knex.schema.table('tasks', function(table) {
    table.date('due_date');
  });
};

exports.down = function(knex) {
  return knex.schema.table('tasks', function(table) {
    table.dropColumn('due_date');
  });
};

