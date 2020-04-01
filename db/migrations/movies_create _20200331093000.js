exports.up = function(knex) {
    return knex.schema
        .createTable('movie', function (table) {
            table.string('id');
            table.string('title', 100);
            table.string('genres', 100);
            table.integer('year', 4);
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('movie');
};
