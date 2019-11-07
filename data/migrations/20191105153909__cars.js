
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table){
  table.increments();
  table.string('car_make', 40).notNullable();
  table.string('car_model', 40).notNullable();
  table.float('vin', 9).notNullable();
  table.float('mileage').notNullable();
  table.string('transmission',10).notNullable();
  table.string('title_status', 60).notNullable();
  table.string('color', 24);
  table.timestamps(true, true)
    })

};

exports.down = function(knex) {
    return knex.schema.table('cars', function (table) {
        table.dropColumn('name');
        table.string('first_name');
        table.string('last_name');
      })
  
};
