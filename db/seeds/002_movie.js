require('../../src/global');

const {Movie} = include('/models');
const movies = require('./movies.json');
exports.seed = async knex => {
    await knex(Movie.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(movies.map(movie => Movie.insertOne(movie))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
