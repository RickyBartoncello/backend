exports.up = function(knex) {
    return knex.schema
        .createTable('quote', function (table) {
            table.string('id');
            table.text('text');
            table.string('author', 255);
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('quote');
};
