require('../../src/global');

const {Quote} = include('/models');
const quotes = require('./quotes.json');
exports.seed = async knex => {
    await knex(Quote.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(quotes.map(quote => Quote.insertOne(quote))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
